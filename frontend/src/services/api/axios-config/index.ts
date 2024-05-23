import axios from "axios"
import { errorInterceptor, responseInterceptor } from "./interceptors"
import { error } from "console"
import { Api } from "@mui/icons-material"

const ApiDados= axios.create({
    baseURL: 'http://localhost:3333/origem'
})
const ApiCEP = axios.create({
    baseURL:'viacep.com.br/ws'
})
const ApisExternas= axios.create({
    baseURL: ''
})

ApiDados.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInterceptor(error)
)

export {ApiDados,ApiCEP}