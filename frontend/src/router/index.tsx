
import { Home } from '../pages/home';
import {Routes, Route, Navigate} from 'react-router-dom'

export const  AppRoutes = () =>{
    return(
            <Routes>
                <Route path='/mini-calc' element={<Home/>}/>
                <Route path='*' element={<Navigate to='/mini-calc'/>}/>
            </Routes>
    )
};