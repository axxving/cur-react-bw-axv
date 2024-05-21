
export const Todo = ({todo}) => {

    const {title, description, state, priority, id} = todo

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={`${state && "text-decoration-line-through"}`}>{title}</h5>
                    <p className={`${state && "text-decoration-line-through"}`}>{description}</p>
                    <div className="d-flex gap-2">
                        <button className="btn btn-danger btn-sm">
                            Eliminar
                        </button>
                        <button className="btn btn-warning btn-sm">
                            Actualizar
                        </button>
                    </div>
                </div>
                <span className='badge bg-primary'>
                    {priority && 'Prioritario'}
                </span>
            </div>
        </li>
    )
}
