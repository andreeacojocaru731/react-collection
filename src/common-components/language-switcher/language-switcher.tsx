import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select value={i18n.language} onChange={handleChange}>
      <option value="en">English</option>
      <option value="fr">Français</option>
      <option value="de">German</option>
    </select>
  );
}
