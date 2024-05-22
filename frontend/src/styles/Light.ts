import {createTheme} from '@mui/material'
import { blue, cyan} from '@mui/material/colors'

export const LightTheme = createTheme({
    palette:{
        primary:{
            main: blue[700],
            dark:blue[800],
            light:blue[500],
            contrastText:'#FFFFFF'
        },
        secondary:{
            main: cyan[700],
            dark:cyan[800],
            light:cyan[500],
            contrastText:'#FFFFFF'
        },
        background:{
            default:'#FFCD40',
            paper: '#EDEDED',
        }
    }
})