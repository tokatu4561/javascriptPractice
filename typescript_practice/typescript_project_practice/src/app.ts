interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number; 
}

//validattion
function validate(validatableInput: Validatable){
    let isValid = true;
    if(validatableInput.required) {
        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if(validatableInput.minLength && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if(validatableInput.maxLength && typeof validatableInput.value === 'string') {
        isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if(validatableInput.min != null && typeof validatableInput.value === 'number') {
        isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if(validatableInput.max != null && typeof validatableInput.value === 'number') {
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
        }
    }
    return adjDescriptor;
}


// project input class
class ProjectInput {
  templeteElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  mandayInputElement: HTMLInputElement;

  constructor() {
    this.templeteElement = <HTMLTemplateElement>(
      document.querySelector("#project-input")!
    );
    this.hostElement = document.querySelector("#app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templeteElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";
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
    this.attach();
  }

  
  private submitHandler(event: Event) {
    event.preventDefault();
    this.clearInput();
  }

  private gatherUserInput(): [string, string, number] | void{
    const enterdTitle = this.titleInputElement.value;
    const enterdDescription = this.descriptionInputElement.value;
    const enterdManday = this.mandayInputElement.value;

    const titleValidatable: Validatable = {
        value: enterdTitle,
        required: true,
    }
    const descriptionValidatable: Validatable = {
        value: enterdTitle,
        required: true,
        minLength: 5
    }
    const mandayValidatable: Validatable = {
        value: +enterdTitle,
        required: true,
        min:1,
        max: 1000
    }
    if (
        validate(titleValidatable) ||
        validate(descriptionValidatable) ||
        validate(mandayValidatable)
    ) {
        alert('入力値が正しくありません');
        return;
    }else {
        return [enterdTitle, enterdDescription, +enterdManday];
    }
  }

  @autobind
  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
    const userInput = this.gatherUserInput();
    if(Array.isArray(userInput)){
        const [title, desc, manday] = userInput;
    }
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }

  private clearInput() {
      this.titleInputElement.value = '';
      this.descriptionInputElement.value = '';
      this.mandayInputElement.value = '';
  }
}

const prjInput = new ProjectInput();
