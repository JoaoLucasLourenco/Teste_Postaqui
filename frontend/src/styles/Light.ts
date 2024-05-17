import {createTheme} from '@mui/material'

export const LightTheme = createTheme({
    palette:{
        primary:{
            main:'#FFCD40',
            contrastText:'#1E1E1E'
        },
        background:{
            default:'#FFCD40',
            paper: '#E1E1E1'
        }
    }
})