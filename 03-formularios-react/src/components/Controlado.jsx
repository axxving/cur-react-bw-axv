import React, { useRef } from 'react';

export const Controlado = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className='container mt-3'>
            <input
                type="text"
                placeholder='Ingrese TODO'
                className='form-control mb-2'
                name='title'
            />
            <textarea
                className='form-control mb-2'
                placeholder='Ingrese descripción'
                name='description'
            />
            <select className='form-select mb-2' name='state'>
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
