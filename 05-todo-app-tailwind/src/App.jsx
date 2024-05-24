import React, { useState } from "react";
import { Header } from "./components/Header";
import { TodoCreate } from "./components/TodoCreate";
import { TodoList } from "./components/TodoList";
import { TodoComputed } from "./components/TodoComputed";
import { TodoFilter } from "./components/TodoFilter";

const initialStateTodos = [
  {
    id: 1,
    title: "Learn React",
    completed: true,
  },
  {
    id: 2,
    title: "Learn Redux",
    completed: false,
  },
  {
    id: 3,
    title: "Learn React Router",
    completed: false,
  },
  {
    id: 4,
    title: "Learn React Hooks",
    completed: false,
  },
];

export const App = () => {
  const [listaTodos, setListaTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }

    setListaTodos([...listaTodos, newTodo]);
  }

  return (
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/imgs/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
      <Header />
      <main className="container mx-auto mt-8 px-4">
        <TodoCreate createTodo={createTodo}/>
        <TodoList listaTodos={listaTodos} />
        <TodoComputed />
        <TodoFilter />
      </main>
      <footer className="mt-8 text-center">Drag and drop to reorder list</footer>
    </div>
  );
};
