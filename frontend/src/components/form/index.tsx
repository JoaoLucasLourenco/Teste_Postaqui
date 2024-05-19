import {TextField} from '@mui/material'
import { StyledForm } from './styles'
export const AppForm = () =>{
    return(
        <StyledForm>
            <section>
            <label>
                <span>Nome Completo</span>
                <TextField variant='outlined' label='Insira seu nome'/>
            </label>
            </section>
        </StyledForm>
    )
}