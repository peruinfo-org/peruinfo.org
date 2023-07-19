import { createContext, useEffect, useState } from "react";
import { cookies } from 'next/headers'



const COOKIE_MODE = 'mode';

type ThemeModeContextType = {
  mode: string
  setMode: (mode: string) => void
}

const ThemeModeContext = createContext<ThemeModeContextType>({} as ThemeModeContextType);

export const ThemeModeProvider = ({ 
  children 
}: {
  children: React.ReactNode
}) => {

  const [mode, setMode] = useState('light');
  const cookieStore = cookies()

  useEffect(() => {
    const themeMode = cookieStore.get(COOKIE_MODE);
    if (!themeMode) {
      const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setMode(userPrefersDark ? 'dark' : 'light');
    } else {
      setMode(themeMode as string);
    }
  }, [])

  return <ThemeModeContext.Provider value={{ mode: 'light', setMode: () => { } }}>
    {children}
  </ThemeModeContext.Provider>
}