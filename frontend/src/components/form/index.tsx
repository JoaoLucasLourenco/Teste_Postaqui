import {Box, Button, FormControlLabel, FormGroup, Grid, InputAdornment, Switch, TextField, colors} from '@mui/material'
import { StyledForm } from './styles'
import * as yup from 'yup'
import { IOriginDesinyInputModels, IPackageInputModels } from '../../types/inputModels'
import { useContext, useState } from 'react'
import { NumericFormat, PatternFormat } from 'react-number-format'
import { useNavigate } from 'react-router'
import { on } from 'events'

interface IAppFormProps{
    tipo: 'origem'|'destino'|'pacote' |'post'
}


export const AppForm: React.FC = () =>{

    const navigate = useNavigate()

    const [tipo,setTipo] = useState('origem')


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
        cpf: NaN,
        phone: NaN,
        cep: NaN,
        estado: '',
        cidade: '', 
        bairro: '',
        rua: '',
        numero: NaN,
        complemento: ''
      })

    const [packageValues, setPackageValues] = useState<IPackageInputModels>({
      peso: NaN,
      altura: NaN,
      largura: NaN,
      comprimento: NaN,
      logReversa: false,
      avisoRecebimento: false,
      maosProprias: false,
      valorMercadoria: NaN,
      qtdItens: NaN,
      descItens: ''
    })
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormValues({ ...formValues, [name]: value })
    }

    const handleInputChangePackage = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setPackageValues({ ...packageValues, [name]: value })
    }
    

    const handleSwitchesChangePackage = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
    setPackageValues((prevSwitches) => ({
      ...prevSwitches,
      [name]: checked,
    }))
    }

    const handleAvancar = ()=>{
      switch(tipo){
        case 'origem':
          setTipo('destino')
          break;
        case 'destino':
          setTipo('pacote')
          break;
        case 'pacote':
          navigate('/post')
          break;
      }
    }
    
    const handleVoltar = ()=>{
      switch(tipo){
        case 'destino':
          setTipo('origem')
          break;
        case 'pacote':
          setTipo('destino')
          break;
        case 'post':
          setTipo('pacote')
          break;
      }
    }


    return(
      <StyledForm>
      {tipo!='pacote'?
      <Box>
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
          <PatternFormat format='###.###.###-##'
          required
          label='CPF'
          fullWidth
          value={formValues.cpf}
          name='cpf'
          placeholder='000.000.000-00'
          onChange={handleInputChange}
          customInput={TextField}/>
        </Grid>
        <Grid item xs={12} sm={12} md={4} xl={3}>
          <PatternFormat format='+55 (##) # ####-####'
            required
            label="Telefone"
            name='phone'
            placeholder='+55 (99) 9 9999-9999'
            onChange={handleInputChange} 
            fullWidth 
            value={formValues.phone} 
            customInput={TextField}
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
          <PatternFormat format='##.###-###'
          required
          label='CEP'
          fullWidth
          placeholder='37.140-000'
          name='cep'
          value={formValues.cep}
          onChange={handleInputChange}
          customInput={TextField}/>
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
            {tipo==='origem'?null:<Button variant='text' 
            onClick={handleVoltar} 
            fullWidth>
              Voltar
            </Button>}


            <Button variant='contained'
            onClick={handleAvancar}
            fullWidth 
            disableElevation>
              Avançar
            </Button>


          </Box>
        </Grid>
        
      </Grid>
    </Box>:
      <Box margin={'0 auto'}>
      <Grid
        container
        spacing={2}
        textAlign='center'
        direction='row'
        justifyContent='center'
        alignItems='center'
      >
        <Grid item xs={12}>
          <h1>Dados do Pacote</h1>
        </Grid>


        <Grid
        container
        item
        xs={12}
        md={5}
        spacing={4}
        textAlign='center'
        direction='row'
        justifyContent='center'
        alignItems='center'>

          <Grid item xs={12}>
          <NumericFormat 
            required
            label='Peso'
            fullWidth
            name='peso'
            placeholder='Em gramas'
            allowNegative={false}
            InputProps={{
              endAdornment: <InputAdornment position="end">g</InputAdornment>,
            }}
            value={packageValues.peso}
            onChange={handleInputChangePackage}
            customInput={TextField}/>
          </Grid>
          <Grid item xs={12}>
            <NumericFormat 
              required
              label='Altura'
              fullWidth
              name='altura'
              placeholder='Em centímetros'
              allowNegative={false}
              InputProps={{
                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              }}
              value={packageValues.altura}
              onChange={handleInputChangePackage}
              customInput={TextField}/>
          </Grid>
          <Grid item xs={12}>
            <NumericFormat 
              required
              label='Largura'
              fullWidth
              name='largura'
              placeholder='Em centímetros'
              allowNegative={false}
              InputProps={{
                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              }}
              value={packageValues.largura}
              onChange={handleInputChangePackage}
              customInput={TextField}/>
            </Grid>
          <Grid item xs={12}  >
            <NumericFormat 
              required
              label='Comprimento'
              fullWidth
              name='comprimento'
              placeholder='Em centímetros'
              allowNegative={false}
              InputProps={{
                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              }}
              value={packageValues.comprimento}
              onChange={handleInputChangePackage}
              customInput={TextField}/>
          </Grid>

        </Grid>
        
        <Grid 
        container
        item
        xs={12}
        md={2}
        spacing={2}
        textAlign='center'
        direction='row'
        justifyContent='center'
        alignItems='center'>

          
          <Grid item xs={12}>
          <FormGroup>
            <FormControlLabel
              required
              label='Lógica reversa'
              name='logReversa'
              control={
                <Switch
                  checked={packageValues.logReversa}
                  name='logReversa'
                  color='secondary'
                  onChange={handleSwitchesChangePackage}
                />
              }
            />

            <FormControlLabel
              required
              control={
                <Switch
                  color='secondary'
                  onChange={handleSwitchesChangePackage}
                  checked={packageValues.avisoRecebimento}
                  name='avisoRecebimento'
                />
              }
              label="Aviso Recebimento"
            />

            <FormControlLabel
              required
              control={
                <Switch
                  color='secondary'
                  onChange={handleSwitchesChangePackage}
                  checked={packageValues.maosProprias}
                  name='maosProprias'
                />
              }
              label="Mãos próprias"
            />
          </FormGroup>
          </Grid>
        </Grid>

        <Grid 
        container
        item
        xs={12}
        md={4}
        spacing={3}
        textAlign='center'
        direction='row'
        justifyContent='center'
        alignItems='center'>

            <Grid item xs={12}  >

              <NumericFormat 
              required
              label='Valor da mercadoria'
              fullWidth
              name='valorMercadoria'
              placeholder='Em reais'
              decimalScale={2}
              allowNegative={false}
              InputProps={{
                endAdornment: <InputAdornment position="end">R$</InputAdornment>,
              }}
              value={packageValues.valorMercadoria}
              onChange={handleInputChangePackage}
              customInput={TextField}/>
            </Grid>


            <Grid item xs={12}  >

              <NumericFormat 
              required
              label='Qauntidade de itens'
              fullWidth
              name='qtdItens'
              placeholder='Em unidade'
              decimalScale={0}
              allowNegative={false}
              InputProps={{
                endAdornment: <InputAdornment position="end">un</InputAdornment>,
              }}
              value={packageValues.valorMercadoria}
              onChange={handleInputChangePackage}
              customInput={TextField}/>

            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                label='Descrição dos itens'
                fullWidth
                rows={5}
                multiline
                helperText={'Limite de caracteres '+packageValues.descItens.length+'/1000'}
                name='descItens'
                value={packageValues.descItens}
                onChange={handleInputChangePackage}
              />
            </Grid>



        </Grid>

        
        
          
        <Grid item xs={12} sm={12} md={6} xl={3.5}>
          <Box display='flex'>        
            <Button 
            variant='text' 
            onClick={handleVoltar} 
            fullWidth>
              Voltar
            </Button>

            <Button 
            variant='contained'
            onClick={handleAvancar}
            fullWidth 
            disableElevation>
              Avançar
            </Button>
          </Box>
        </Grid>
        
        
      </Grid>
    </Box>
      }
      
    </StyledForm>
    )
}