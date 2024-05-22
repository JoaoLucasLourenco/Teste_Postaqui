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

const updateOrigem = async (dados: IOriginDesinyInputModels): Promise<void|Error>  =>{
    try {
        const {data} = await ApiDados.put('/origem/1',dados)
        
    } catch (error) {
        console.error(error)
        return new Error('Erro ao atualizar os dados da origem!')
}}

const createOrigem = async (dados:IOriginDesinyInputModels): Promise<string|Error>  =>{
    try {
        const {data} = await ApiDados.post('/origem',dados)
        if(data){
            return 'Origem inserida com sucesso!'
        }
        return new Error('Erro ao adicionar os dados da origem!')
    } catch (error) {
        console.error(error)
        return new Error('Erro ao adicionar os dados da origem!')
}}


const deleteOrigem = async (): Promise<void|Error>  =>{
    try {
        await ApiDados.delete('/origem/1')
    } catch (error) {
        console.error(error)
        return new Error('Erro ao deletar os dados da origem!')
}
}

export const OrigemService = {
    getOrigem,
    updateOrigem,
    createOrigem,
    deleteOrigem
}