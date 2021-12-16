import { VFC } from "react";
import { TodoType} from "./types/Todo";

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
    const {title, userId, completed = false} = props;
    const completeMark = completed ? '[完]' : '[未完]';
    return (
        <p>{`${completeMark}${title}ユーザー:${userId}`}</p>
    )
}