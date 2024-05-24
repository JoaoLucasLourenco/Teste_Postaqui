import axios from "axios"
import { errorInterceptor, responseInterceptor } from "./interceptors"
import { error } from "console"
import { Api } from "@mui/icons-material"

const ApiDados= axios.create({
    baseURL: 'http://localhost:3333/origem'
})
const ApiCEP = axios.create({
    baseURL:'http://viacep.com.br/ws'
})
const ApisExternas= axios.create({
    baseURL: 'https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/',
    headers:{'Content-Type': 'application/json'}
})

ApisExternas.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
)

export {ApiDados,ApiCEP, ApisExternas}