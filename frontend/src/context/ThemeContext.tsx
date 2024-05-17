import { Children, ReactNode, createContext } from "react";


interface IThemeContextData{
    themeName:'light'|'dark',
    toggleTheme: ()=>void;
}
interface IAppThemeContextDataProps{
    children: ReactNode
}
const ThemeContext = createContext({

} as IThemeContextData)



