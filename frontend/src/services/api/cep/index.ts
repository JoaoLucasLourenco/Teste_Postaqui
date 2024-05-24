import { IOriginDesinyInputModels } from "../../../types/inputModels"
import { ApiCEP } from "../axios-config"



const getCep = async (cep:string): Promise<any> =>{
    try {
        const {data} = await ApiCEP.get('/'+cep+'/json/')
        if(data){
            return(
                data
            )
        }
        return new Error('Erro ao buscar cep da origem!')
    } catch (error) {
        console.error(error)
        return new Error('Erro ao buscar cep da origem!')
    }
}

const updateOrigem = async (): Promise<any>  =>{

}

const createOrigem = async (): Promise<any>  =>{

}

const deleteOrigem = async (): Promise<any>  =>{

}

export const CepService = {
    getCep,
    updateOrigem,
    createOrigem,
    deleteOrigem
}