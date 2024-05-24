import React, { ReactNode, createContext, useState } from "react";
import { IOriginDesinyInputModels } from "../types/inputModels";


interface ICardOrigemProviderProps{
    children: ReactNode
}
interface TAppContext {
    data: IOriginDesinyInputModels
    setData: (data: IOriginDesinyInputModels) => void
}


export const AppContext = createContext<TAppContext|undefined>(undefined)


export const AppProvider : React.FC<ICardOrigemProviderProps> =({children})=>{
    const [data,setData] = useState<IOriginDesinyInputModels>({
        nome: '',
        email: '',
        uf:'', 
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

    


    return(
        <>
        <AppContext.Provider value={{data, setData}}>
            {children}
        </AppContext.Provider>
        </>
    )
}