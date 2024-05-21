import {Box, Button, ButtonGroup, Grid, TextField} from '@mui/material'
import { StyledForm } from './styles'
import * as yup from 'yup'
import { IOriginDesinyInputModels } from '../../types/inputModels'
import { useState } from 'react'
import { Form } from '@unform/web'

interface IAppFormProps{
    tipo: 'origem'|'destino'|'pacote'
    pagAnterior?:'origem'|'destino'
    avancar?: () => void

}


export const AppForm: React.FC<IAppFormProps> = ({tipo, pagAnterior}) =>{
    
    
    const schema = yup.object<IOriginDesinyInputModels>().shape({
        nome: yup.string().required("Campo obrigatório para prosseguir!"),
        email: yup.string().min(6).email("Insira um email válido!").required("Campo obrigatório para prosseguir!"),
        cpf: yup.string().min(11).required("Campo obrigatório para prosseguir!"),
        telefone: yup.number().min(11).required("Campo obrigatório para prosseguir!"),
        cep: yup.number().min(8,'O campo deve ter pelo menos ').required("Campo obrigatório para prosseguir!"),
        estado: yup.string().required("Campo obrigatório para prosseguir!"),
        cidade: yup.string().required("Campo obrigatório para prosseguir!"),
        bairro: yup.string().required("Campo obrigatório para prosseguir!"),
        rua: yup.string().required("Campo obrigatório para prosseguir!"),
        numero: yup.number().positive().integer().required("Campo obrigatório para prosseguir!"),
        complemento: yup.string().default('')
    })
    
    const [formValues, setFormValues] = useState<IOriginDesinyInputModels>({
        nome: '',
        email: '',
        cpf: '',
        telefone: NaN,
        cep: NaN,
        estado: '',
        cidade: '', 
        bairro: '',
        rua: '',
        numero: NaN,
        complemento: ''
      })
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    };
    
    return(
        <StyledForm>
      <Grid
        container
        spacing={2}
        textAlign='center'
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={12}>
          <h1>{tipo === 'origem' ? 'Dados de Origem' : 'Dados de Destino'}</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={8} xl={9}>
          <TextField
            required
            label='Nome completo'
            fullWidth
            name='nome'
            value={formValues.nome}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={3}>
          <TextField
            required
            label='CPF'
            fullWidth
            placeholder='000.000.000-00'
            name='cpf'
            value={formValues.cpf}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={3}>
          <TextField
            required
            label='Telefone'
            fullWidth
            placeholder='(99) 99999-9999'
            type='number'
            name='telefone'
            value={formValues.telefone}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8} xl={9}>
          <TextField
            required
            label='Email'
            fullWidth
            placeholder='seuemail@email.com'
            name='email'
            value={formValues.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={5} xl={2}>
          <TextField
            required
            label='CEP'
            fullWidth
            placeholder='37.140-000'
            type='number'
            name='cep'
            value={formValues.cep}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={7} xl={5}>
          <TextField
            required
            label='Estado'
            fullWidth
            name='estado'
            value={formValues.estado}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={5}>
          <TextField
            required
            label='Cidade'
            fullWidth
            name='cidade'
            value={formValues.cidade}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={5}>
          <TextField
            required
            label='Bairro'
            fullWidth
            name='bairro'
            value={formValues.bairro}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={9} xl={5}>
          <TextField
            required
            label='Rua'
            fullWidth
            name='rua'
            value={formValues.rua}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={3} xl={2}>
          <TextField
            required
            label='Número'
            type='number'
            fullWidth
            placeholder='999'
            name='numero'
            value={formValues.numero}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            label='Complemento'
            fullWidth
            name='complemento'
            value={formValues.complemento}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} xl={3.5}>
          <Box display='flex'>        
          {tipo==='origem'?null:<Button variant='text' fullWidth>Voltar</Button>}
          <Button variant='contained' fullWidth disableElevation>Avançar</Button>
          </Box>
        </Grid>
      </Grid>
    </StyledForm>
    )
}