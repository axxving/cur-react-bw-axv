import React, { useRef, useState } from 'react';

export const Controlado = () => {

    const [todo, setTodo] = useState({
        title: 'TODO #',
        description: 'Descripcion',
        state: 'Pendiente',
        priority: true,
    });

    // const [title, setTitle] = useState('Tarea #1');
    // const [description, setDescription] = useState('Descripcion de la tarea, ');
    // const [state, setState] = useState('pendiente');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo.title, todo.description, todo.state)
    }

    const hanldeChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={handleSubmit} className='container mt-3'>
            <input
                type="text"
                placeholder='Ingrese TODO'
                className='form-control mb-2'
                name='title'
                value={todo.title}
                onChange={hanldeChange}
            />
            <textarea
                className='form-control mb-2'
                placeholder='Ingrese descripción'
                name='description'
                value={todo.description}
                onChange={hanldeChange}
            />
            <div className='mt-3 mb-3'>
                <input
                    type='checkbox'
                    name='priority'
                    className='form-check-input'
                    id='inputCheck'
                    checked={todo.priority}
                    onChange={e => setTodo({...todo, priority: e.target.checked})}
                />
                <label htmlFor='inputCheck' className='ms-3'>Dar prioridad</label>
            </div>
            <select
                className='form-select mb-2'
                name='state'
                value={todo.state}
                onChange={hanldeChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button
                type="submit"
                className='btn btn-success'
            >
                Procesar
            </button>
        </form>
    );
}

export default Controlado;
