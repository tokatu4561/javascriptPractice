enum ProjectStatus {
  Active,
  Finished,
}

// Projectの型
class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public manday: number,
    public status: ProjectStatus
  ) {}
}

type Listener<T> = (items: T[]) => void;

class State<T>  {
    protected listeners: Listener<T>[] = [];
    addListener(listenerFn: Listener<T>) {
        this.listeners.push(listenerFn);
      }
}

//プロジェクト状態管理
class ProjectState extends State <Project> {
  private project: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
      super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  addProject(title: string, description: string, manday: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      manday,
      ProjectStatus.Active
    );

    this.project.push(newProject);
    for (const listenerFn of this.listeners) {
      listenerFn(this.project.slice());
    }
  }
}

const projectState = ProjectState.getInstance();

interface Validatable {
  value: string | number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

//バリデーション
function validate(validatableInput: Validatable) {
  let isValid = true;
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }
  if (
    validatableInput.minLength &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }
  if (
    validatableInput.maxLength &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.max;
  }

  return isValid;
}

// autobind decorator
function autobind(
  _target: any,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

// コンポーネントクラス
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templeteElement: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templeteId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string,
  ) {
    this.templeteElement = <HTMLTemplateElement>(
      document.getElementById(templeteId)!
    );
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNode = document.importNode(
      this.templeteElement.content,
      true
    );

    this.element = importedNode.firstElementChild as U;
    if(newElementId){
        this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  abstract configure(): void;
  abstract renderContent(): void;

  private attach(insertAtBegining: boolean) {
    this.hostElement.insertAdjacentElement(insertAtBegining ? "afterbegin" :"beforeend", this.element);
  }
}

//プロジェクトアイテム
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>{
    private project: Project;

    get manday() {
        if(this.project.manday < 20) {
            return this.project.manday.toString() + '人日';
        } else {
            return (this.project.manday / 20).toString +'人月';
        }
    }

    constructor (hostId: string, project: Project) {
        super('single-project', hostId, false, project.id);
        this.project = project;

        this.configure();
        this.renderContent();
    }

    configure() {}

    renderContent() {
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector('h3')!.textContent = this.manday.toString();
        this.element.querySelector('p')!.textContent = this.project.description;
    }
}

// ProjectList Class
class ProjectList extends Component<HTMLDivElement, HTMLElement> {
  assignedProject: Project[] = [];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false ,`${type}-projects`);

    this.assignedProject = [];

    
    this.configure();
    this.renderContent();
  }

  configure() {
    projectState.addListener((projects: Project[]) => {
        const relevantProjects = projects.filter((prj) => {
          if (this.type === "active") {
            return prj.status === ProjectStatus.Active;
          }
          return prj.status === ProjectStatus.Finished;
        });
        this.assignedProject = relevantProjects;
        this.renderProjects();
      });
  }

  renderContent() {
    const listId = `${this.type}-projects`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector("h2")!.textContent =
      this.type === "active" ? "実行中プロジェクト" : "完了プロジェクト";
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProject) {
      new ProjectItem(listEl.id, prjItem);
    }
  }
}

// project input class
class ProjectInput extends Component< HTMLDivElement,HTMLFormElement>{
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input'),
    
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.mandayInputElement = this.element.querySelector(
      "#manday"
    ) as HTMLInputElement;

    this.configure();
  }

  @autobind
  configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  renderContent() {}

  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, manday] = userInput;
      projectState.addProject(title, desc, manday);
      this.clearInput();
    }
  }

  private gatherUserInput(): [string, string, number] | void {
    const enterdTitle = this.titleInputElement.value;
    const enterdDescription = this.descriptionInputElement.value;
    const enterdManday = this.mandayInputElement.value;

    const titleValidatable: Validatable = {
      value: enterdTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enterdTitle,
      required: true,
      minLength: 5,
    };
    const mandayValidatable: Validatable = {
      value: +enterdTitle,
      required: true,
      min: 1,
      max: 1000,
    };
    if (
      validate(titleValidatable) ||
      validate(descriptionValidatable) ||
      validate(mandayValidatable)
    ) {
      alert("入力値が正しくありません");
      return;
    } else {
      return [enterdTitle, enterdDescription, +enterdManday];
    }
  }

  private clearInput() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.mandayInputElement.value = "";
  }
}

const prjInput = new ProjectInput();
const activeProjectList = new ProjectList("active");
const finishedProjectList = new ProjectList("finished");
