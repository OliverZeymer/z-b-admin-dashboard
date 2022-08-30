import { useContext } from "react";
import themeContext from "../contexts/themeContext";
import { setToLS } from "../functions/setToLS";
import { BsBrightnessHigh } from "react-icons/bs";
const Theme = () => {
  const { theme, setTheme } = useContext(themeContext);

  setToLS("theme", theme);
  return (
    <>
      <button
        className="hidden text-[16px] gap-4 sm:flex font-medium hover:scale-105 transition-all items-center absolute bottom-8 text-primary-text"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        <BsBrightnessHigh size="24" />
        Toggle Theme
      </button>
      <button
        className="flex sm:hidden transition-all items-center text-primary-text"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        <BsBrightnessHigh size="32" />
      </button>
    </>
  );
};

export default Theme;
