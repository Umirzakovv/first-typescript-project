import axios from "axios";
import React, { useEffect, useState } from "react";
import { ITodo } from "../../types/types";
import { List } from "../list/List";
import TodoItem from "../todo-item/TodoItem";

const TodosPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodo();
  }, []);
  
  async function fetchTodo() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};

export default TodosPage;
