import React from "react";
import { Route, Routes } from "react-router-dom";
import TodosPage from "./components/todos-page/TodosPage";
import Userspage from "./components/users-page/Userspage";
const App = () => {
  return (
    <Routes>
      <Route path={"/users"} element={<Userspage />} />
      <Route path={"/todos"} element={<TodosPage />} />
    </Routes>
  );
};

export default App;
