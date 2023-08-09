import React from "react";
import { Route, Routes } from "react-router-dom";
import EventsExample from "./components/events-example/EventsExample";
import Home from "./components/home/Home";
import SingleUserPage from "./components/single-user-page/SingleUserPage";
import TodosPage from "./components/todos-page/TodosPage";
import Userspage from "./components/users-page/Userspage";
const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/users"} element={<Userspage />} />
      <Route path={"/todos"} element={<TodosPage />} />
      <Route path={"/drag-drop"} element={<EventsExample />} />
      <Route path={"/users/:id"} element={<SingleUserPage />} />
    </Routes>
  );
};

export default App;
