import { IOriginDesinyInputModels } from "../../../types/inputModels"
import { ApiDados } from "../axios-config"



const getOrigem = async (): Promise<IOriginDesinyInputModels|Error> =>{
    try {
        const {data} = await ApiDados.get('/origem')
        if(data){
            return(
                data
            )
        }
        return new Error('Erro ao mostrar os dados da origem!')
    } catch (error) {
        console.error(error)
        return new Error('Erro ao mostrar os dados da origem!')
    }
}

const updateOrigem = async (): Promise<any>  =>{

}

const createOrigem = async (): Promise<any>  =>{

}

const deleteOrigem = async (): Promise<any>  =>{

}

export const OrigemService = {
    getOrigem,
    updateOrigem,
    createOrigem,
    deleteOrigem
}