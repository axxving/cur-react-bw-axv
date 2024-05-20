import React, { useRef } from 'react';

export const App = () => {

  const form = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Me han dado clic');
    console.log(form.current)
  }

  return (
    <form onSubmit={handleSubmit} ref={form} className='container mt-5'>
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
      <button onClick={handleSubmit} className='btn btn-success'>Procesar</button>
    </form>
  );
}
