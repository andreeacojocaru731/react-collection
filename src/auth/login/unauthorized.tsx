import { useTranslation } from "react-i18next";
import cx from "classnames";
import Style from "./unauthorized.module.scss";

export default function Unauthorized() {
  const { t } = useTranslation("common");
  return <div className={cx(Style.unauthorized)}>{t("unauthorized")}</div>;
}
