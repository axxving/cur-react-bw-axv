
export const Todos = ({todos}) => {
    return (
        <div className="mt-5">
            <h1 className="text-center">Todos</h1>
            <ul  >
                {
                    todos.map(todo => (
                        <li key={todo.id}> {todo.title} </li>
                    ))
                }
            </ul>
        </div>
    )
}
