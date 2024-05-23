import React from "react";
import { AppHeader } from "../../components";
import { AppForm } from "../../components/form";
import HorizontalLinearStepper from "../../components/stepper";
import { AppContext } from "../../context/AppContext";

interface IHomeProrps{
    page: "origem"|"destino"|"pacote"|"post"
}


export const Home : React.FC = () =>{
        return(
        <>
        <AppHeader/>
        <AppForm/>
        </>
    )
}