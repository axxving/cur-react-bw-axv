// TodoItem.js
import { CrossIcon } from "./icons/CrossIcon";

export const TodoItem = ({ todo }) => {
    const { id, title, completed } = todo;

    return (
        <article className="flex gap-4 border-b border-b-gray-400">
            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
            <p className="grow text-gray-600">{title}</p>
            <button className="flex-one">
                <CrossIcon />
            </button>
        </article>
    );
};