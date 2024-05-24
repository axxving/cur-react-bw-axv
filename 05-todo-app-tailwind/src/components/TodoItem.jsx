// TodoItem.js
import { CrossIcon } from "./icons/CrossIcon";
import { IconCheck } from "./icons/IconCheck";

export const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b border-b-gray-400">

            <button onClick={() => updateTodo(id)} className={`h-5 w-5 border-2 rounded-full flex-none ${completed 
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center" 
                : "inline-block"}`}>
                {
                    completed && <IconCheck />
                }
            </button>
            <p className={`grow text-gray-600 ${completed && "line-through"}`}>{title}</p>
            <button className="flex-one" onClick={() => removeTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    );
};