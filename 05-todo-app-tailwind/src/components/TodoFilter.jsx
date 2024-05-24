export const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <div className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                <button
                    className={`${filter === "all" ? "text-blue-500" : "text-gray-400"} hover:text-blue-500 transition duration-300 ease-in-out`}
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>
                <button
                    className={`${filter === "active" ? "text-blue-500" : "text-gray-400"}
            hover:text-blue-500 transition duration-300 ease-in-out`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${filter === "completed" ? "text-blue-500" : "text-gray-400"} hover:text-blue-500 transition duration-300 ease-in-out`}
                    onClick={() => changeFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </div>
    );
};
