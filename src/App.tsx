import { Routes, Route, MemoryRouter } from "react-router-dom";
import Style from "./App.module.scss";
import cx from "classnames";
import HomePage from "./components/home-page/home-page";
import Layout from "./components/layout/layout";
import { UserContext } from "./state-manager/userContext";
import { useState } from "react";
import React from "react";
import CharacterPoints from "./components/character-points/character-points";
import ToggleMessage from "./components/toggle-message/toggle-message";
import TodoList from "./components/todo-list/todo-list";

const Login = React.lazy(() => import("./auth/login/login"));
const Focus = React.lazy(() => import("./components/focus/focus"));
const MegaStoreApp = React.lazy(
  () => import("./components/mega-store-app/mega-store-app"),
);

function App() {
  const [userData, setUserData] = useState({ token: "", isLoggedIn: false });

  const setData = (data) => {
    setUserData(data);
  };

  return (
    <>
      <MemoryRouter>
        <div className={cx(Style.page)}>
          <UserContext.Provider value={{ userData, setUserData: setData }}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/focus" element={<Focus />} />
                <Route path="/mega-store-app" element={<MegaStoreApp />} />
                <Route path="/character-points" element={<CharacterPoints />} />
                <Route path="/toggle-message" element={<ToggleMessage />} />
                <Route path="/todo-list" element={<TodoList />} />
              </Route>
            </Routes>
          </UserContext.Provider>
        </div>
      </MemoryRouter>
    </>
  );
}

export default App;
