
import { Home } from '../pages/home';
import { Button, ButtonBase } from '@mui/material';
import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { AppPost } from '../pages/post/Post';

export const  AppRoutes = () =>{
    return(

        <Routes>
            <Route path='/origem' element={<Home page='origem'/>}/>
            <Route path='/destino' element={<Home page='destino'/>}/>
            <Route path='*' element={<Navigate to='/origem'/>}/>
        </Routes>
    )
};