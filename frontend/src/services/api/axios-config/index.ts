import axios from "axios"

const ApiDados= axios.create({
    baseURL: 'http://localhost:3333/origem'
})

const ApisExternas= axios.create({
    baseURL: ''
})

export{}