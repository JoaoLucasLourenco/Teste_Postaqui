import {Button, Grid, TextField} from '@mui/material'
import { StyledForm } from './styles'
import { Controller, set, useForm } from 'react-hook-form'

import * as yup from 'yup'
import { IOriginDesinyInputModels } from '../../types/inputModels'
import { useState } from 'react'

export const AppForm = () =>{
    
    const schema = yup.object<IOriginDesinyInputModels>().shape({
        nome: yup.string().required("Campo necessário!"),
        email: yup.string().email("Insira um email válido!").required("Campo necessário!"),
        cpf: yup.string().required("Campo necessário!"),
        telefone: yup.string().required("Campo necessário!"),
        cep: yup.string().required("Campo necessário!"),
        estado: yup.string().required("Campo necessário!"),
        cidade: yup.string().required("Campo necessário!"),
        bairro: yup.string().required("Campo necessário!"),
        rua: yup.string().required("Campo necessário!"),
        numero: yup.string().required("Campo necessário!"),
        complemento: yup.string().required("Campo necessário!")
    })
    
    const [defaultValues, setDefaultValues] = useState<IOriginDesinyInputModels>({
        nome: '',
        email: '',
        cpf: '',
        telefone: '',
        cep: '',
        estado: '',
        cidade: '', 
        bairro: '',
        rua: '',
        numero: '',
        complemento: ''
      })
    return(
        
        <StyledForm>
            <Grid container spacing={4} 
                textAlign='center'
                direction="row" 
                justifyContent="center"
                alignItems="center">
                <Grid item xs={12}>
                    <h1>Dados de Origem</h1>
                </Grid>
                <Grid item md={8} xl={10} sm={12} xs={12}>
                    <TextField
                    required
                    label="Nome completo"
                    fullWidth
                    />
                </Grid>
                <Grid item md={4} xl={2} sm={12} xs={12}>
                    <TextField
                    required
                    label="CPF"
                    fullWidth
                    />
                </Grid>
                <Grid item md={4} xl={3} sm={12} xs={12}>
                    <TextField
                    required
                    label="Telefone"
                    fullWidth
                    />
                </Grid>
                <Grid item md={8} xl={9} sm={12} xs={12}>
                    <TextField
                    required
                    label="Email"
                    fullWidth
                    />
                </Grid>
                <Grid item md={5} xl={2} sm={12} xs={12}>
                    <TextField
                    required
                    label="CEP"
                    fullWidth
                    />
                </Grid>
                <Grid item md={7} xl={5} xs={12}>
                    <TextField
                    required
                    label="Estado"
                    fullWidth
                    />
                </Grid>
                <Grid item md={6} xl={5} xs={12}>
                    <TextField
                    required
                    label="Cidade"
                    fullWidth
                    />
                </Grid>
                <Grid item md={6} xl={5} xs={12}>
                    <TextField
                    required
                    label="Bairro"
                    fullWidth
                    />
                </Grid>
                <Grid item md={9} xl={5} xs={12}>
                    <TextField
                    required
                    label="Rua"
                    fullWidth
                    />
                </Grid>
                <Grid item md={3} xl={2} xs={12}>
                    <TextField
                    required
                    label="Número"
                    type='number'
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    label="Complemento"
                    fullWidth
                    />
                </Grid>

                <Grid item xl={3} sm={12} xs={12} md={6}>
                    <Button variant='contained' type='button' size='large' disableElevation fullWidth>Avançar</Button>
                </Grid>
            </Grid>
                

        </StyledForm>
    )
}