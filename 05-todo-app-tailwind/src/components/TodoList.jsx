// TodoList.js
import { TodoItem } from "./TodoItem";

export const TodoList = ({ listaTodos }) => {
    return (
        <div className="mt-8 rounded-t-md bg-white [&>article]:p-4">
            {listaTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};