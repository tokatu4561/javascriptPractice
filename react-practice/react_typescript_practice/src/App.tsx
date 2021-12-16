import axios from 'axios';
import React from 'react';
import { useState } from "react";
import './App.css';
import { Todo } from "./Todo";
import { TodoType} from "./types/Todo";
import { Text } from "./Text";



function App() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const onClickFetchData = () => {
    axios.get<TodoType[]>("https://jsonplaceholder.typicode.com/todos")
        .then((response) => { 
          console.log(response);
          setTodos(response.data);
        })
  }

  return (
    <div className="App">
      <Text color="red" fontSize="18px"></Text>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => {
        return (
          <Todo key={todo.id} completed={todo.completed} title={todo.title} userId={todo.userId}></Todo>
        )
      })}
    </div>
  );
}

export default App;
