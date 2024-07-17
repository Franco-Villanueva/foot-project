import React from "react";
import {Route, Routes} from 'react-router-native'
import Detail from "../pages/Deail";
import Home from "../pages/Home";
import Navigator from './Navigation'



const Main = () => {


    return ( 
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
        </>
     );
}
 
export default Main;