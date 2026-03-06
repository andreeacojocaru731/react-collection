import { useTranslation } from "react-i18next";
import Unauthorized from "../../auth/login/unauthorized";
import cx from "classnames";
import Style from "./home-page.module.scss";
import { UserContext } from "../../state-manager/userContext";
import { useContext } from "react";

export default function HomePage() {
  const { t } = useTranslation("common");
  const { userData } = useContext(UserContext);

  return (
    <>
      {userData.isLoggedIn ? (
        <>
          <h3 className={cx(Style.description)}>{t("homeDescription")}</h3>

          <div>{t("task", { count: 1 })}</div>
          <div>{t("task", { count: 2 })}</div>

          <div>
            {t("intlDateTime", {
              val: new Date(),
              formatParams: {
                val: {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                },
              },
            })}
          </div>
        </>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
