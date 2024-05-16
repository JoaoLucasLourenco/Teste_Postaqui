
import { Button, ButtonBase } from '@mui/material';
import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'

export const  AppRoutes = () =>{
    return(
        <Routes>
            <Route path='/home' element={<Button variant='contained'>Jao</Button>}/>

            <Route path='*' element={<Navigate to='/home'/>}/>
        </Routes>
    )
};