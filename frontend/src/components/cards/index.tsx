import React from "react";
import { Card, CardContent, CardHeader } from "@mui/material";
import { IOriginDesinyInputModels } from "../../types/inputModels";

interface IAppInfoCardProps{
    tipo: 'origem'|'destino'|'pacote' |'post'
    dados?: IOriginDesinyInputModels|undefined
}

export const AppInfoCard: React.FC<IAppInfoCardProps> = (tipo,dados) =>{
    return(
        <>
            <Card sx={{maxWidth: 275}}>
                <CardHeader>
                    <h1>origem</h1>
                </CardHeader>
                <CardContent>
                    <p>{dados.nome}</p>
                    <p>{dados.cpf}</p>
                </CardContent>
            </Card>
            <Card sx={{maxWidth: 275}}>
                <CardHeader>
                    <h1>origem</h1>
                </CardHeader>
                <CardContent>
                    <p>{dados.nome}</p>
                    <p>{dados.cpf}</p>
                </CardContent>
            </Card>
            <Card sx={{maxWidth: 275, color: "blue"}}>
                <CardHeader>
                    <h1>origem</h1>
                </CardHeader>
                <CardContent>
                    <p>{dados.nome}</p>
                    <p>{dados.cpf}</p>
                </CardContent>
            </Card>
            
        </> 
        
    )
}