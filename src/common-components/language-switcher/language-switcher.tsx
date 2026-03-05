import { useTranslation } from "react-i18next";
import Style from "./language-switcher.module.scss";
import cx from "classnames";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <select
        className={cx(Style.languageSwitcher)}
        value={i18n.language}
        onChange={handleChange}
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="de">DE</option>
      </select>
    </div>
  );
}
