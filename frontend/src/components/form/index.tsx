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

    const [defaultValues] = useState<IOriginDesinyInputModels>({
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
            <Grid container spacing={4}  xs={10}>

                <Grid item xs={6}>
                    <TextField
                    required
                    label="Nome completo"
                    fullWidth
                    onChange={e=>defaultValues}
                    />
                </Grid>
                <Grid item xs={3} >
                    <TextField
                    required
                    label="CPF"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                    required
                    label="Telefone"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                    required
                    label="Email"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                    required
                    label="CEP"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField
                    required
                    label="Estado"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={4}>
                    <TextField
                    required
                    label="Cidade"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                    required
                    label="Bairro"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                    required
                    label="Rua"
                    fullWidth
                    />
                </Grid>
                <Grid item xs={2}>
                    <TextField
                    required
                    label="Número"
                    type='number'
                    fullWidth
                    />
                </Grid>
                <Grid item xs={12} >
                    <TextField
                    label="Complemento"
                    fullWidth
                    />
                </Grid>

                <Grid item>
                    <Button variant='contained' type='button'>Avançar</Button>
                </Grid>
            </Grid>

                

        </StyledForm>
    )
}