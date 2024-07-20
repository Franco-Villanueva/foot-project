import React from "react";
import {Route, Routes, Navigate } from 'react-router-native'
import Detail from "../pages/Detail";




const Main = () => {


    return ( 
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path='/detail/:id' element={<Detail />} />
            </Routes>
        </>
     );
}
 
export default Main;