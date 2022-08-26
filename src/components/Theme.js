import { useContext } from "react";
import themeContext from "../contexts/themeContext";
import { setToLS } from "../functions/setToLS";
const Theme = () => {
  const { theme, setTheme } = useContext(themeContext);

  setToLS("theme", theme);
  return (
    <button
      className="p-5 rounded-lg bg-primary-color text-primary-text border border-primary-color hover:text-primary-color hover:bg-primary-text transition-all "
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      Change Theme
    </button>
  );
};

export default Theme;
