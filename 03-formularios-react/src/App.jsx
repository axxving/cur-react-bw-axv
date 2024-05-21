import React, { useRef } from 'react';

export const App = () => {

  const form = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(form.current)
    const {title, description, state} = Object.fromEntries([
      ...data.entries(),
    ])

    console.log(title, description, state)
  }

  return (
    <form onSubmit={handleSubmit} ref={form} className='container mt-5'>
      <input 
        type="text" 
        placeholder='Ingrese TODO'
        className='form-control mb-2'
        name='title'
        defaultValue='todo 01'
      />
      <textarea 
        className='form-control mb-2' 
        placeholder='Ingrese descripción'
        name='description'
        defaultValue='descripcion 01'
      />
      <select className='form-select mb-2' name='state' defaultValue='completado'>
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button onClick={handleSubmit} className='btn btn-success'>Procesar</button>
    </form>
  );
}
