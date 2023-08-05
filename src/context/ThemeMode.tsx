
import Cookies from "js-cookie";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";


type ColorModeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

export const ThemeModeContext = createContext<ColorModeContextType>(
  {} as ColorModeContextType
);


export const COOKIE_MODE = "_m";

export const ThemeModeContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  
  const [mode, setMode] = useState('');

  useEffect(() => {
    // detect theme if no existing cookie
    const themeMode = Cookies.get(COOKIE_MODE);
    if (!themeMode) {
      const darkModeMediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      const darkModeOn = darkModeMediaQuery.matches;
      setMode(darkModeOn ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    Cookies.set(COOKIE_MODE, mode);
  }, [mode]);

  const setColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };



  return (
    <ThemeModeContext.Provider
      value={{
        setMode: setColorMode,
        mode,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};