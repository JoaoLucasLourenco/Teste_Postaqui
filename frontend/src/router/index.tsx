
import { Home } from '../pages/home';
import { Button, ButtonBase } from '@mui/material';
import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'

export const  AppRoutes = () =>{
    return(

        <Routes>
            <Route path='/home' element={<Home/>}/>

            <Route path='*' element={<Navigate to='/home'/>}/>
        </Routes>
    )
};