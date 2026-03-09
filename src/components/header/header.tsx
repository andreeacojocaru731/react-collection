import { useTranslation } from "react-i18next";

import Style from "./header.module.scss";

import cx from "classnames";
import { LanguageSwitcher } from "../../common-components/language-switcher/language-switcher";
import {
  NavLink,
  useNavigate,
  type NavLinkRenderProps,
} from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../state-manager/userContext";

function Header() {
  const navigate = useNavigate();
  const activeLinkClass = ({ isActive, isPending }: NavLinkRenderProps) =>
    isPending
      ? Style.inactiveLink
      : isActive
        ? Style.activeLink
        : Style.inactiveLink;

  const [userName, setUserName] = useState("");
  const [showMenuItems, setShowMenuItems] = useState(false);

  useEffect(() => {
    setUserName("Andreea"); // TODO: should come from be
  }, []);
  const token = localStorage.getItem("token");
  const { setUserData } = useContext(UserContext);
  const { t } = useTranslation();

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setUserData({
      token: "",
      isLoggedIn: false,
    });
    localStorage.setItem("token", "");
    localStorage.setItem("role", "");
    navigate("/");
  };

  const handleBurgerMenuClick = () => {
    setShowMenuItems(!showMenuItems);
  };

  return (
    <>
      <div className={cx(Style.header)}>
        <label className={cx(Style.title)}>{t("title")}</label>
        {token ? (
          <label
            className={cx(Style.title)}
            aria-label={t("helloUser", { name: userName })}
          >
            {t("helloUser", { name: userName })}
          </label>
        ) : (
          <></>
        )}

        <div className={cx(Style.buttonGroup)}>
          <LanguageSwitcher></LanguageSwitcher>
          {token ? (
            <button
              className={cx(Style.login)}
              onClick={handleLogoutClick}
              aria-label={"sign out"}
            >
              <i className={cx("fa fa-sign-out")}></i>
            </button>
          ) : (
            <button
              className={cx(Style.login)}
              onClick={handleLoginClick}
              aria-label={"sign in"}
            >
              <i className={cx("fa fa-sign-in")}></i>
            </button>
          )}

          <button
            className={cx(Style.burgerMenu)}
            onClick={handleBurgerMenuClick}
            aria-label={"open the menu"}
          >
            <i className={cx("fa fa-bars")}></i>
          </button>
        </div>
      </div>

      {showMenuItems ? (
        <nav className={cx(Style.header)}>
          <div className={cx(Style.homeNav)}>
            <NavLink to="/" className={activeLinkClass}>
              Home
            </NavLink>
          </div>
          {token ? (
            <div className={cx(Style.otherNav)}>
              <NavLink to="/focus" className={activeLinkClass}>
                Focus
              </NavLink>
              <NavLink to="/mega-store-app" className={activeLinkClass}>
                Mega Store App
              </NavLink>
              <NavLink to="/character-points" className={activeLinkClass}>
                Character Points
              </NavLink>
              <NavLink to="/toggle-message" className={activeLinkClass}>
                Toggle Message
              </NavLink>
              <NavLink to="/todo-list" className={activeLinkClass}>
                Todo List
              </NavLink>
              <NavLink to="/change-username" className={activeLinkClass}>
                Change Username
              </NavLink>
              <NavLink to="/grocery-app" className={activeLinkClass}>
                Grocery App
              </NavLink>
            </div>
          ) : (
            <></>
          )}
        </nav>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
