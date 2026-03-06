import { BrowserRouter, Routes, Route } from "react-router-dom";
import Style from "./App.module.scss";
import Focus from "./components/focus/focus";
import MegaStoreApp from "./components/mega-store-app/mega-store-app";
import cx from "classnames";
import HomePage from "./components/home-page/home-page";
import Login from "./auth/login/login";
import Layout from "./components/layout/layout";
import { UserContext } from "./state-manager/userContext";
import { useState } from "react";

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
