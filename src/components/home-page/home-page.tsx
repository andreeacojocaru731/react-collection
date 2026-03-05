import { useTranslation } from "react-i18next";
import Unauthorized from "../../auth/login/unauthorized";

export default function HomePage() {
  const { t } = useTranslation("common");

  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <>
          <div>HomePage</div>

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
