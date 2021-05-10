import React, { useState } from "react";

const ThemeContext = React.createContext({ isDark: null, toggleTheme: () => null });

const CACHE_KEY = "IS_DARK";

const ThemeContextProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        const isDarkThemeSetting = localStorage.getItem(CACHE_KEY);
        return isDarkThemeSetting ? JSON.parse(isDarkThemeSetting) : false;
    });

    const toggleTheme = () => {
        setIsDark((prevState) => {
            localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState));
            return !prevState;
        })
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeContextProvider };