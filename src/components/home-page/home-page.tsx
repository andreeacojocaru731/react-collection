import { useTranslation } from "react-i18next";
import Unauthorized from "../../auth/login/unauthorized";
import cx from "classnames";
import Style from "./home-page.module.scss";
import { useEffect, useState } from "react";
// import { UserContext } from "../../state-manager/userContext";
// import { useContext } from "react";

export default function HomePage() {
  const { t } = useTranslation("common");
  // const { userData } = useContext(UserContext);
  const token = localStorage.getItem("token");

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [currentDate]);

  return (
    <>
      {token ? (
        <>
          <h3 className={cx(Style.description)}>{t("homeDescription")}</h3>

          <div>{t("task", { count: 1 })}</div>
          <div>{t("task", { count: 2 })}</div>

          <div>
            {t("intlDateTime", {
              val: currentDate,
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
