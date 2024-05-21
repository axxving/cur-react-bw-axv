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

  const [todos, setTodos] = useState(initialStateTodos)

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (id) => {
    const newArray = todos.filter(todo => todo.id !== id);
    setTodos(newArray);
  }

  const updateTodo = (id) => {
    const newArray = todos.map(todo => {
      if(todo.id === id) {
        todo.state = !todo.state;
      }
      return todo;
    })
    setTodos(newArray);
  }

  return (
    <div className='container mt-2'>
      <h1>Formulario</h1>
      <Formulario addTodo={addTodo} />
      <Todos todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
}
