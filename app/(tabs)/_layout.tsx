import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import {Tabs} from "expo-router";
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import Heart from '@/src/icons/heart';

const TabBarStyle: ViewStyle = {
    position: "absolute",
    bottom: 0,
    backgroundColor:'#395873',
    width: "100%",
    height:75,
    borderTopWidth: 2,
    borderTopColor:'#87AECF'
  };

export default () =>{
    return(
        <Tabs 
            screenOptions={{ 
            tabBarInactiveTintColor: '#87AECF', tabBarActiveTintColor: '#FFCACA', 
            tabBarLabelStyle: {
                fontSize: 12,
                fontWeight: "semibold",
                marginBottom: 10,
                },
            }}>
            <Tabs.Screen
                name="home" 
                options = {{
                    title: 'home', 
                    tabBarIcon: ({ color }) => <FontAwesome size={35} name="home" color={color} />,
                    tabBarStyle: TabBarStyle,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="chat" 
                options = {{
                    title: 'chat', 
                    tabBarIcon: ({ color }) => <Ionicons size={35} name="chatbox-ellipses" color={color} />,
                    tabBarStyle: TabBarStyle,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="meet" 
                options = {{
                    title: 'meet', 
                    tabBarIcon: ({ color }) => <Heart/>,
                    tabBarStyle: TabBarStyle,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="point" 
                options = {{
                    title: 'point', 
                    tabBarIcon: ({ color }) => <FontAwesome6 size={31} name="coins" color={color} />,
                    tabBarStyle: TabBarStyle,
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="profile" 
                options = {{
                    title: 'profile', 
                    tabBarIcon: ({ color }) => <FontAwesome size={31} name="user" color={color} />,
                    tabBarStyle: TabBarStyle,
                    headerShown: false
                }}
            />
        </Tabs>
    ); 
};