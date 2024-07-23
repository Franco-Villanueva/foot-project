import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Setting from '../pages/Setting'
import Main from "./Main";
import Home from "../pages/Home";

const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen path='/' name="Home" component={Home} />
            {/* <Tab.Screen name="Settings" component={Setting} /> */}
        </Tab.Navigator>
    )
}


export default function Navigation() {
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}