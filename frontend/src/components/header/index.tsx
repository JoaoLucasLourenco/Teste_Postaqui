import React from "react";
import { StyledHeader } from "./styles";
import { Logo } from "../../assets";




export const AppHeader =()=>{
    return(
        <StyledHeader>
            <img className="Logo" src={Logo} alt="logo-postaqui"/>
            <h1>Teste Calculadora Postaqui</h1>
        </StyledHeader>
    )
}