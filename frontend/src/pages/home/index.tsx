import React from "react";
import { AppHeader } from "../../components";
import { AppForm } from "../../components/form";

interface IHomeProrps{
    page: "origem"|"destino"
}


export const Home : React.FC<IHomeProrps> = ({page}) =>{
        return(
        <>
        <AppHeader/>
        <AppForm tipo={page}/>
        </>
    )
}