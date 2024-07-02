import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from '../pages/Home'
import Setting from '../pages/Setting'
import Main from "./Main";

const Tab = createBottomTabNavigator()

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Main} />
            <Tab.Screen name="Settings" component={Setting} />
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