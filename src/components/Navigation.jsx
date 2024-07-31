import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import Setting from '../pages/Setting';
import Home from "../pages/Home";

import { FontAwesome } from 'react-native-vector-icons';

const Tab = createBottomTabNavigator()
const HomeStackNavigator = createStackNavigator()

function MyTabs() {
    return (
        <Tab.Navigator 
        initialRouteName="Home"
        screenOptions= {{
            headerShown: false,
            tabBarActiveTintColor:'#365E32',
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarLabel:'Home',
                tabBarIcon: ({color,size})=>
                    (<FontAwesome name="home" color={color} size={size} />)
                
            }
            }
            />

            <Tab.Screen 
            name="Settings" 
            component={Setting}
            options={{
                tabBarLabel:'Setting',
                tabBarIcon: ({color,size})=>
                    (<FontAwesome name="gear" color={color} size={size} />)
                
            }
            }
            />
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