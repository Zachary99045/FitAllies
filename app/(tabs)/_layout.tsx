import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import {Tabs} from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';



export default () =>{
    return(
        <Tabs screenOptions={{ tabBarInactiveTintColor: '#87AECF', tabBarActiveTintColor: '#FFCACA' }}>
            <Tabs.Screen
                name="home" 
                options = {{
                    title: 'home', 
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="chat" 
                options = {{
                    title: 'chat', 
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="chatbox-ellipses" color={color} />,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="meet" 
                options = {{
                    title: 'meet', 
                    tabBarIcon: ({ color }) => <Ionicons size={28} name="heart" color={color} />,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="point" 
                options = {{
                    title: 'point', 
                    tabBarIcon: ({ color }) => <FontAwesome6 size={24} name="coins" color={color} />,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="profile" 
                options = {{
                    title: 'profile', 
                    tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />,
                    headerShown: false
                }}
            />
        </Tabs>
    ); 
};