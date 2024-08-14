import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import Setting from '../pages/Setting';
import Home from "../pages/Home";
import Detail from "../pages/Detail";

import { FontAwesome } from 'react-native-vector-icons';
import Favorites from "../pages/Favorites";
import Category from "./Category";



const Tab = createBottomTabNavigator()
const HomeStackNavigator = createStackNavigator()

function HomeStack() {
    return(
        <HomeStackNavigator.Navigator
        screenOptions= {{

            headerShown: true,
        }}
        >
            <HomeStackNavigator.Screen
            name="HomeScreen"
            component={Home}
            options={{
                headerShown: false
            }}
            />
            <HomeStackNavigator.Screen
            name="Detail"
            component={Detail}
            options={{
                headerShown: false,

            }}
            />
            <HomeStackNavigator.Screen
            name="Category"
            component={Category}
            
            />
        </HomeStackNavigator.Navigator>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#365E32',
            tabBarStyle: {
                backgroundColor: '#FFFFFF',
                height: 85,
                paddingBottom: 10,
                paddingTop: 10,
                borderRadius: 60
            },
            tabBarIconStyle: {
                justifyContent: 'center',
                alignItems: 'center',
            },
            tabBarLabelStyle: {
                display: 'none', // Ocultar etiquetas
            },
        }}
        >
            <Tab.Screen 
            name="Home" 
            component={HomeStack}
            options={{
                headerShown: false,
                tabBarLabel:'',
                tabBarIcon: ({color,size})=>
                    (<FontAwesome name="home" color={color} size={30} />)
                
            }
            }
            />
            <Tab.Screen 
            name="Fav" 
            component={Favorites}
            options={{
                headerShown: false,
                tabBarLabel:'',
                tabBarIcon: ({color,size})=>
                    (<FontAwesome name="heart" color={color} size={28} />)
                
            }
            }
            />
            <Tab.Screen 
            name="Settings" 
            component={Setting}
            options={{
                tabBarLabel:'',
                tabBarIcon: ({color,size})=>
                    (<FontAwesome name="gear" color={color} size={30} />)
                
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