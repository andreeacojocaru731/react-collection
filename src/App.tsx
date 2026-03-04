import { useTranslation } from "react-i18next";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  type NavLinkRenderProps,
} from "react-router-dom";
import Style from "./App.module.scss";
import Focus from "./components/focus/focus";
import MegaStoreApp from "./components/mega-store-app/mega-store-app";
import cx from "classnames";
import { LanguageSwitcher } from "./common-components/language-switcher/language-switcher";
import { useEffect, useState } from "react";
import HomePage from "./components/home-page/home-page";

function App() {
  const { t } = useTranslation();
  const activeLinkClass = ({ isActive, isPending }: NavLinkRenderProps) =>
    isPending
      ? Style.inactiveLink
      : isActive
        ? Style.activeLink
        : Style.inactiveLink;

  const [userName, setUserName] = useState("");
  const [showMenuItems, setShowMenuItems] = useState(false);

  useEffect(() => {
    setUserName("Andreea");
  }, []);

  const handleBurgerMenuClick = () => {
    setShowMenuItems(!showMenuItems);
  };

  return (
    <>
      <div className={cx(Style.header)}>
        <label aria-label={t("helloUser", { name: userName })}>
          {t("helloUser", { name: userName })}
        </label>
        <div>{t("title")}</div>
        <LanguageSwitcher></LanguageSwitcher>
        <button
          className={cx(Style.burgerMenu)}
          onClick={handleBurgerMenuClick}
        >
          <i className={cx("fa fa-bars")}></i>
        </button>
      </div>

      <BrowserRouter>
        {showMenuItems ? (
          <nav className={cx(Style.header)}>
            <div className={cx(Style.homeNav)}>
              <NavLink to="/" className={activeLinkClass}>
                Home
              </NavLink>
            </div>
            <div className={cx(Style.otherNav)}>
              <NavLink to="/focus" className={activeLinkClass}>
                Focus
              </NavLink>
              <NavLink to="/mega-store-app" className={activeLinkClass}>
                Mega Store App
              </NavLink>
            </div>
          </nav>
        ) : (
          <></>
        )}

        <div className={cx(Style.page)}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/focus" element={<Focus />} />
            <Route path="/mega-store-app" element={<MegaStoreApp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
