import {createTheme} from '@mui/material'

export const LightTheme = createTheme({
    palette:{
        primary:{
            main:'#2D9CDB',
            light:'#2D9CDB',
            contrastText:'#FFFFFF'
        },
        background:{
            default:'#FFCD40',
            paper: '#E1E1E1',
        }
    }
})