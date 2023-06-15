import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();


function ThemeContextProvider({ children }) {
    let [theme, setTheme] = useState("white");
    let [font, setFont] = useState("#262626");
    return (
        <ThemeContext.Provider value={{ theme, setTheme, font, setFont }}>
            {children}
        </ThemeContext.Provider>
    )
}


let useTheme = () => useContext(ThemeContext);

export { ThemeContextProvider, useTheme }