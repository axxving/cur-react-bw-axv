import React, { useState } from 'react';
import { Formulario } from './components/Formulario';
import { Todos } from './components/Todos';

const initialStateTodos = [
  {
    id: 1,
    title: 'Todo #01',
    description: 'Descripcion 01',
    state: true,
    priority: true,
  },
  {
    id: 2,
    title: 'Todo #02',
    description: 'Descripcion 02',
    state: true,
    priority: false,
  },
  {
    id: 3,
    title: 'Todo #02',
    description: 'Descripcion 02',
    state: true,
    priority: true,
  },
];

export const App = () => {

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const [todos, setTodos] = useState(initialStateTodos)

  return (
    <div className='container mt-2'>
      <h1>Formulario</h1>
      <Formulario addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
  );
}
