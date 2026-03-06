import { BrowserRouter, Routes, Route } from "react-router-dom";
import Style from "./App.module.scss";
import cx from "classnames";
import HomePage from "./components/home-page/home-page";
import Layout from "./components/layout/layout";
import { UserContext } from "./state-manager/userContext";
import { useState } from "react";
import React from "react";

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
      <BrowserRouter>
        <div className={cx(Style.page)}>
          <UserContext.Provider value={{ userData, setUserData: setData }}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/focus" element={<Focus />} />
                <Route path="/mega-store-app" element={<MegaStoreApp />} />
              </Route>
            </Routes>
          </UserContext.Provider>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
