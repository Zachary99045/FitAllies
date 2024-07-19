import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle} from "react-native";
import { FontAwesome6, Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import {Tabs, router} from "expo-router";
import Heart from '@/src/icons/heart';
import CustomHeader from "@/components/CustomHeader";

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
                    header: () => <CustomHeader title="Chat" />,
                }}
            />
            <Tabs.Screen
                name="meet" 
                options = {{
                    title: 'meet', 
                    tabBarIcon: ({ color }) => <Heart/>,
                    tabBarStyle: TabBarStyle,
                    header: () => <CustomHeader title="Meet" />,
                }}
            />
            <Tabs.Screen
                name="point" 
                options = {{
                    title: 'point', 
                    tabBarIcon: ({ color }) => <FontAwesome6 size={31} name="coins" color={color} />,
                    tabBarStyle: TabBarStyle,
                    header: () => <CustomHeader title="Point" />,
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

const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems:'center',
      backgroundColor: 'transparent',
      paddingVertical: 4,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#395873',
      marginRight: 10, // Add margin to separate it from the edge
    },
    buttonText: {
      color: '#395873',
      fontSize: 13,
      fontWeight: 'normal',
      marginHorizontal:5
    },
    plus: {
      marginLeft: 5,
    },
    point: {
      marginRight: 5,
    },
  });