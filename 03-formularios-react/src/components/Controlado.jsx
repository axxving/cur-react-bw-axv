import React, { useRef, useState } from 'react';

export const Controlado = () => {

    const [title, setTitle] = useState('Tarea #1');

    const [description, setDescription] = useState('Descripcion de la tarea, ');

    const [state, setState] = useState('pendiente');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description, state)
    }

    return (
        <form onSubmit={handleSubmit} className='container mt-3'>
            <input
                type="text"
                placeholder='Ingrese TODO'
                className='form-control mb-2'
                name='title'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <textarea
                className='form-control mb-2'
                placeholder='Ingrese descripción'
                name='description'
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
            <select 
                className='form-select mb-2' 
                name='state'
                value={state}
                onChange={e => setState(e.target.value)}
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
