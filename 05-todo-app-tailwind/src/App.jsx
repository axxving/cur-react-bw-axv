import React from "react";
import { Header } from "./components/Header";
import { TodoCreate } from "./components/TodoCreate";
import { TodoList } from "./components/TodoList";
import { TodoComputed } from "./components/TodoComputed";
import { TodoFilter } from "./components/TodoFilter";

export const App = () => {
  return (
    <div className='min-h-screen bg-gray-300 bg-[url("./assets/imgs/bg-mobile-light.jpg")] bg-contain bg-no-repeat'>

      <Header />

      <main className="container mx-auto mt-8 px-4">

        <TodoCreate />

        <TodoList />

        <TodoComputed />

        <TodoFilter />
        
      </main>

      <footer className="mt-8 text-center">
        Drag and drop to reorder list
      </footer>
    </div>
  );
};
