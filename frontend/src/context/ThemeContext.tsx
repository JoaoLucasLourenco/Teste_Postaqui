import { Box, ThemeProvider } from "@mui/material";
import { ReactNode, createContext, useCallback, useContext, useMemo, useState } from "react";
import { LightTheme, PostTheme } from "../styles";


interface IThemeContextData{
    themeName:'light'|'dark',
    toggleTheme: ()=>void;
}
interface IAppThemeProviderProps{
    children: ReactNode
}
const ThemeContext = createContext({

} as IThemeContextData)

export const AppThemeContext = () =>{
    return useContext(ThemeContext)
}

export  const AppThemeProvider: React.FC <IAppThemeProviderProps> =({children})=>{
    const [themeName, setThemeName] =  useState<'light'|'dark'>('light')

    const toggleTheme = useCallback(()=>{
            setThemeName(oldThemeName=>oldThemeName==='light'?'dark':'light')
    },[])

    const theme = useMemo(()=>{
        return themeName==='light'?LightTheme:PostTheme
    },[themeName])
    return (
        
        <ThemeContext.Provider value={{themeName,toggleTheme}}>
            <ThemeProvider theme={theme}>
                <Box height='100%' width='100%' bgcolor={theme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}      


