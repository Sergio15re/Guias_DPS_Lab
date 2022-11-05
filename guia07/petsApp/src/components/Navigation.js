import React from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cats from "../screens/CatsScreen";
import Dogs from "../screens/DogsScreen";
import { Icon } from "react-native-elements";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
export default function Navigation()
{
    return(
        <Tab.Navigator sceneContainerStyle={{backgroundColor:'#f5ebe0'}}>
        <Tab.Screen 
            name="Dogs" component={Dogs} options={{title:'Dogs',
            tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="dog" color={color} size={26} />),
            headerTitleAlign:'center'}}
        />
        <Tab.Screen 
            name="Cats" component={Cats} 
            
            options={{
                title:'Cats',
                headerTitleAlign:'center',
                backgroundColor:'#fefae0',
                tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cat" color={color} size={26} />
          )}
                }
                
        />           
        </Tab.Navigator>
    );
}