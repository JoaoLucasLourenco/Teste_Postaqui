import {Box, Button, Card, CardContent, CardHeader, FormControlLabel, FormGroup, Grid, InputAdornment, Switch, TextField, colors} from '@mui/material'
import { StyledForm } from './styles'
import { Endereco, IOriginDesinyInputModels, IPackageInputModels, RespostaEnvio } from '../../types/inputModels'
import { useContext, useState } from 'react'
import { NumericFormat, PatternFormat } from 'react-number-format'
import { useNavigate } from 'react-router'
import { AppHeader } from '../header'
import { isValidCEP, isValidCPF, isValidEmail, isValidTelefone, limparCEP, limparNumeros } from '../../functions/functions'
import axios from 'axios'
import { ApisExternas } from '../../services/api/axios-config'

interface IAppFormProps{
    tipo: 'origem'|'destino'|'pacote' |'post' |'codigo'
}


export const AppForm: React.FC = () =>{

    const navigate = useNavigate()

    const [tipo,setTipo] = useState('origem')
    
    
    const [carrId, setCarrId] = useState('')
    const[ menorPreco, setMenorPreco] = useState(0);
    const [transportadoraMenorPreco,setTransportadoraMenorPreco] = useState('');
    const [codRastreio, setCodRastreio] = useState('')
    const [formValues, setFormValues] = useState<IOriginDesinyInputModels>({
        nome: '',
        email: '',
        uf:'' ,
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

    const [formDestinoValues, setFormDestinoValues] = useState<IOriginDesinyInputModels>({
      nome: '',
      email: '',
      uf:'' , 
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
    
    /*const checkCEP = async (e: React.ChangeEvent<HTMLInputElement>) =>{
      const cep = e.target.value.replace(/\D/g,'')
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        {tipo==='destino'?setEnderecoDestino(response.data):setEndereco(response.data)}
      } catch (error) {
        setEndereco(null)
      }

    }*/

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormValues({ ...formValues, [name]: value })
    }


    const handleInputDestinoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormDestinoValues({ ...formDestinoValues, [name]: value })
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
              if(formValues.nome===''){
                alert('Insira o nome do remetente')
              }
              else if(formValues.cidade===''){
                alert('Insira a cidade do remetente')
              }
              else if(formValues.estado===''){
                alert('Insira o estado do remetente')
              }
              else if(!formValues.numero){
                alert('Insira o número do remetente')
              }
              else if(!formValues.bairro){
                alert('Insira o bairro do remetente')
              }
              else if(!formValues.rua){
                alert('Insira a rua do remetente')
              }
              else if(!isValidEmail(formValues.email)){
                alert('Insira um email válido para continuar')
              }
              else if(!isValidCPF(formValues.cpf.toString())){
                alert('Insira um CPF válido para continuar')
              }
              else if(!isValidTelefone(formValues.phone.toString())){
                alert('Insira um telefone válido para continuar')
              }
              else if(!isValidCEP(formValues.cep.toString())){
                alert('Insira um CEP válido para continuar')
              }

              else{
                setTipo('destino')
              }
          
          break;
        case 'destino':
          if(formDestinoValues.nome===''){
            alert('Insira o nome do remetente')
          }
          else if(formDestinoValues.cidade===''){
            alert('Insira a cidade do remetente')
          }
          else if(formDestinoValues.estado===''){
            alert('Insira o estado do remetente')
          }
          else if(!formDestinoValues.numero){
            alert('Insira o número do remetente')
          }
          else if(!formDestinoValues.bairro){
            alert('Insira o bairro do remetente')
          }
          else if(!formDestinoValues.rua){
            alert('Insira a rua do remetente')
          }
          else if(!isValidEmail(formDestinoValues.email)){
            alert('Insira um email válido para continuar')
          }
          else if(!isValidCPF(formDestinoValues.cpf.toString())){
            alert('Insira um CPF válido para continuar')
          }
          else if(!isValidTelefone(formDestinoValues.phone.toString())){
            alert('Insira um telefone válido para continuar')
          }
          else if(!isValidCEP(formDestinoValues.cep.toString())){
            alert('Insira um CEP válido para continuar')
          }

          else{
            setTipo('pacote')
          }
          break;
        case 'pacote':
          if((!packageValues.peso)||
          (!packageValues.altura)||
          (!packageValues.largura)||
          (!packageValues.comprimento)||
          (!packageValues.valorMercadoria)||
          (!packageValues.qtdItens)||
          packageValues.descItens===''){
            alert('Insira todos os dados do pacote')
          }

          else{
            setTipo('post')
          }
          break;
        case 'post':
          setTipo('codigo')
          break;
        case 'codigo':
          setTipo('origem')
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

    const handleEditar = (card: string) => {
      return (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        switch(card){
          case 'origem':
            setTipo('origem')
            break;
          case 'destino':
            setTipo('destino')
            break;
          case 'pacote':
            setTipo('pacote')
            break;
        }
      };
    };
    
    const enviarDados = async () =>{
      const dadosEnvio = {
        sender: {
          fullname: formValues.nome,
          cpf: formValues.cpf.toString(),
          phone: formValues.phone.toString(),
          email: formValues.nome,
          address: {
            cep: formValues.cep.toString(),
            state: formValues.estado,
            uf: formValues.estado,
            city: formValues.cidade,
            neighborhood: formValues.bairro,
            street: formValues.rua,
            number: formValues.numero.toString(),
            complement: formValues.complemento
          }
        },
        receiver: {
          fullname: formDestinoValues.nome,
          cpf: formDestinoValues.cpf.toString(),
          phone: formDestinoValues.phone.toString(),
          email: formDestinoValues.nome,
          address: {
            cep: formDestinoValues.cep.toString(),
            state: formDestinoValues.estado,
            uf: formDestinoValues.estado,
            city: formDestinoValues.cidade,
            neighborhood: formDestinoValues.bairro,
            street: formDestinoValues.rua,
            number: formDestinoValues.numero.toString(),
            complement: formDestinoValues.complemento
          }
        },
        package: {
          weight: packageValues.peso.toString(),
          height: packageValues.altura.toString(),
          width: packageValues.largura.toString(),
          length: packageValues.comprimento.toString(),
          reverse: packageValues.logReversa,
          ar: packageValues.avisoRecebimento,
          own_hands: packageValues.maosProprias,
          information: {
            amount: packageValues.peso.toString(),
            quantity: packageValues.peso.toString(),
            description: packageValues.peso.toString()
          }
        }
      };
      ApisExternas.post('/shipping_calculate', dadosEnvio)
      .then((response) => {
        const dadosEnvio: RespostaEnvio[] = response.data.shipment;
        dadosEnvio.forEach((envio) => {
          const precoFinal = envio.price - envio.discount;
          if (precoFinal < menorPreco) {
            setMenorPreco(precoFinal);
            setTransportadoraMenorPreco(envio.carrier);
            setCarrId(envio._id);
          }
          setTipo('post')
        });
      })
      .catch((error) => {
        console.error('Erro ao enviar os dados:', error);
  });
    }

    const enviarPostagem = async () =>{
      const responseRastreio = await ApisExternas.post(`/posting?carrier=${transportadoraMenorPreco}`, {
      calculated_id: carrId
    });

        setCodRastreio(responseRastreio.data.code);
        setTipo('codigo')
      };


    
    return(
      <Box bgcolor={tipo!='codigo'?'#FFCD40':'#FFFBFB'} 
      height={tipo=='origem'?'100vh':tipo=='post'?'100vh':'100%'} 
      padding={tipo!='origem'?'0 0 40px 0':'0'}>
        
        {tipo!='codigo'?
        <Box width='80%' margin='0 auto'>
          <AppHeader/>
          <Grid
          textAlign='center'
          direction='row'
          justifyContent='center'
          alignItems='center'
          padding='2em'
          container
          spacing={4}
          >
            <Grid item md={4} xl={3} sm={12} xs={12} display={tipo=='origem'?'none':'block'}>
              <Card>
                <CardContent>
                  <h2>Origem</h2>
                  <p>{formValues.nome} - 
                  {formValues.cpf} - 
                  {formValues.cep} - 
                  {formValues.cidade} - 
                  {formValues.estado} - 
                  {formValues.bairro} - 
                  {formValues.rua} - 
                  {formValues.numero} - 
                  {formValues.complemento}</p>
                  <Button onClick={handleEditar('origem')}>Editar</Button>
                </CardContent>
                
              </Card>
              
            </Grid>

            <Grid item xl={3} md={4} sm={12} xs={12} display={tipo=='destino'?'none':tipo=='origem'?'none':'block'}>
              <Card>
                <CardContent>
                  <h2>Destino</h2>
                  <p>{formDestinoValues.nome} - 
                  {formDestinoValues.cpf} - 
                  {formDestinoValues.cep} - 
                  {formDestinoValues.cidade} - 
                  {formDestinoValues.estado} - 
                  {formDestinoValues.bairro} - 
                  {formDestinoValues.rua} - 
                  {formDestinoValues.numero} - 
                  {formDestinoValues.complemento}</p>
                  <Button onClick={handleEditar('destino')}>Editar</Button>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xl={3} md={4} sm={12} xs={12} display={tipo!='post'?'none':'block'}>
              <Card>
                <CardContent>
                  <h2>Pacote</h2>
                  <p> <b>AxLxC:</b> {packageValues.altura+'X'+packageValues.largura+'X'+packageValues.comprimento}</p>
                  <p> <b>Logística Reversa:</b> {packageValues.logReversa?'Sim':'Não'}</p>
                  <p> <b>Mãos próprias:</b> {packageValues.maosProprias?'Sim':'Não'}</p>
                  <p> <b>Aviso recebimento:</b> {packageValues.avisoRecebimento?'Sim':'Não'}</p>
                  <p> <b>Valor mercadoria:</b> R${packageValues.valorMercadoria}</p>
                </CardContent>
                <Button onClick={handleEditar('pacote')}>Editar</Button>
              </Card>
            </Grid>
          </Grid>
          {tipo!=='post'?
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
                name='nome'
                fullWidth
                value={tipo==='origem'?formValues.nome:formDestinoValues.nome}
                onChange={tipo==='origem'?handleInputChange:handleInputDestinoChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} xl={3}>
              <PatternFormat format='###.###.###-##'
              required
              label='CPF'
              fullWidth
              value={tipo==='origem'?formValues.cpf:formDestinoValues.cpf}
              name='cpf'
              placeholder='000.000.000-00'
              onChange={tipo==='origem'?handleInputChange:handleInputDestinoChange}
              customInput={TextField}/>
            </Grid>
            <Grid item xs={12} sm={12} md={4} xl={3}>
              <PatternFormat format='+55 (##) #####-####'
                required
                label="Telefone"
                name='phone'
                placeholder='+55 (99) 99999-9999'
                onChange={tipo==='origem'?handleInputChange:handleInputDestinoChange} 
                fullWidth
                value={tipo==='origem'?formValues.phone:formDestinoValues.phone}
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
                value={tipo==='origem'?formValues.email:formDestinoValues.email}
                onChange={tipo==='origem'?handleInputChange:handleInputDestinoChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={5} xl={2}>
              <PatternFormat format='##.###-###'
              required
              label='CEP'
              fullWidth
              placeholder='00.000-000'
              name='cep'
              value={tipo==='origem'?formValues.cep:formDestinoValues.cep}
              onChange={tipo==='origem'?handleInputChange:handleInputDestinoChange}
              customInput={TextField}/>
            </Grid>
            <Grid item xs={12} sm={12} md={7} xl={5}>
              <TextField
                required
                label='Estado'
                fullWidth
                name='estado'
                value={tipo==='origem'?formValues.estado:formDestinoValues.estado}
                onChange={tipo==='origem'?handleInputChange:handleInputDestinoChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={5}>
              <TextField
                required
                label='Cidade'
                fullWidth
                name='cidade'
                value={tipo==='origem'?formValues.cidade:formDestinoValues.cidade}
                onChange={tipo==='origem'?handleInputChange:handleInputDestinoChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} xl={5}>
              <TextField
                required
                label='Bairro'
                fullWidth
                name='bairro'
                value={tipo==='origem'?formValues.bairro:formDestinoValues.bairro}
                onChange={tipo==='origem'?handleInputChange:handleInputDestinoChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={9} xl={5}>
              <TextField
                required
                label='Rua'
                fullWidth
                name='rua'
                value={tipo==='origem'?formValues.rua:formDestinoValues.rua}
                onChange={tipo==='origem'?handleInputChange:handleInputDestinoChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3} xl={2}>
            <NumericFormat
                    required
                    label='Número'
                    fullWidth
                    name='numero'
                    placeholder='999'
                    decimalScale={0}
                    allowNegative={false}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">nº</InputAdornment>,
                    }}
                    value={tipo==='origem'?formValues.numero:formDestinoValues.numero}
                    onChange={tipo==='origem'?handleInputChange:handleInputDestinoChange}
                    customInput={TextField}
                    />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label='Complemento'
                fullWidth
                name='complemento'
                value={tipo==='origem'?formValues.complemento:formDestinoValues.complemento}
                onChange={tipo==='origem'?handleInputChange:handleInputDestinoChange}
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
                  decimalScale={0}
                  allowNegative={false}
                  InputProps={{
                    endAdornment: <InputAdornment position="end">g</InputAdornment>
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
                    decimalScale={0}
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
                    decimalScale={0}
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
                    decimalScale={0}
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
                    value={packageValues.qtdItens}
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
                  onClick={enviarDados}
                  fullWidth 
                  disableElevation>
                    Avançar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          }
          
          </StyledForm>:
          <Box margin='0 auto'
          display='flex'
          align-items='center'
          justify-cotent='center'
          bgcolor='#EDEDED'
          padding='2em'>
            <Grid
            container
            spacing={2}
            textAlign='center'
            direction='row'
            justifyContent='center'
            alignItems='center'
            >
              <Grid item xs={12}>
              <h1>Valor final do frete</h1>
              <p>O melhor frete para o seu destino é {transportadoraMenorPreco} com o valor de R${menorPreco}</p>
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
                  onClick={enviarPostagem}
                  fullWidth 
                  disableElevation>
                    Postar
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>}
        </Box>:
        <Box width='80%' margin='0 auto' >
          <AppHeader/>
          <Grid container margin='0 auto' textAlign='center'
          direction='row'
          justifyContent='center'
          alignItems='center'>
          <Grid item xs={12} sm={12} md={6} xl={4}
          >
          <img src='https://s3-alpha-sig.figma.com/img/507a/dc59/9b1b18129c51005e3a8b6a0237846964?Expires=1717372800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RLrIiLwqQIJ4E0IxOybIxfwXICB6g1MiCNLZMDSSC4bPIsrF54jQtSKrfEF~y1EiTshFxbqFKBBfHxtiwNe69-I31W~qV1svV8X5~aA-kx2l5E8PO5ZtDIki5MR-folhjudMv3lXZxKhGDlDXDwZNIGLP62BU3D6u0MrPbEWgyHS~RtgifGXGB3ljoCkzGztWWWCbAe3PRZRwZN0gZjW8mfKZWpD~S7V4G4YlSjxLzk1Fi8r-Pi6oN06yAIin8nDYVVUc5gQGRSRNpLIaVEsIHpqsT24~VnqUyQSQDk9Xfwr6WdXAldvrkOo4i965YPOlRrLz~EE0LWKQnqKGYUydg__'/>
          <h1>Frete Postado!</h1>
          <p>Parabéns seu frete foi postado com sucesso</p>
          <p>Seu código de rastreio é:</p>
          <h2>{codRastreio}</h2>
          <Button variant='contained'
                onClick={handleAvancar}
                fullWidth 
                disableElevation>
                  Nova postagem
                </Button>
                </Grid>
          </Grid>
          </Box>
        }
      </Box>
    )
}