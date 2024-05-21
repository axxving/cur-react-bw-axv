import {Todo} from './Todo';

export const Todos = ({todos}) => {
    return (
        <div className="mt-5">
            <h1 className="text-center">Todos</h1>
            <ul className='list-group'>
                {
                    todos.map(todo => (
                        //<li key={todo.id}> {todo.title} </li>
                        <Todo key={todo.id} todo={todo}/>
                    ))
                }
            </ul>
        </div>
    )
}
