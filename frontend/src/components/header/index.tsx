import React, { useState } from "react";
import { StyledHeader } from "./styles";





export const AppHeader =()=>{

    const [email, setEmail] = useState('')
    return(
        <StyledHeader>
            <img src="frontend/src/assets/logo.png" alt="logo-postaqui"/>
            <h1>Teste Calculadora Postaqui</h1>
        </StyledHeader>
    )
}