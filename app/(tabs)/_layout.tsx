import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle} from "react-native";
import { FontAwesome6, Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import {Tabs, router} from "expo-router";
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
                    headerTitle: "Chat",
                    headerTintColor: "#395873",
                    headerTitleStyle: { fontSize: 25, fontWeight: 'bold' },
                    headerRight: () => (
                        <Pressable
                        onPress={() => router.push("/home/eventdetail")}
                        style={styles.button}
                        >
                            <FontAwesome6 size={14} name="coins" color="#395873" style={styles.point}/>
                            <Text style={styles.buttonText}>1000</Text>
                            <AntDesign name="plus" size={14} color="black" style={styles.plus} />
              
                        </Pressable>
                    ),
                }}
            />
            <Tabs.Screen
                name="meet" 
                options = {{
                    title: 'meet', 
                    tabBarIcon: ({ color }) => <Heart/>,
                    tabBarStyle: TabBarStyle,
                    headerTitle: "Meet",
                    headerTintColor: "#395873",
                    headerTitleStyle: { fontSize: 25, fontWeight: 'bold' },
                    headerRight: () => (
                        <Pressable
                        onPress={() => router.push("/home/eventdetail")}
                        style={styles.button}
                        >
                            <FontAwesome6 size={14} name="coins" color="#395873" style={styles.point}/>
                            <Text style={styles.buttonText}>1000</Text>
                            <AntDesign name="plus" size={14} color="black" style={styles.plus} />
              
                        </Pressable>
                    ),
                }}
            />
            <Tabs.Screen
                name="point" 
                options = {{
                    title: 'point', 
                    tabBarIcon: ({ color }) => <FontAwesome6 size={31} name="coins" color={color} />,
                    tabBarStyle: TabBarStyle,
                    headerTitle: "Point",
                    headerTintColor: "#395873",
                    headerTitleStyle: { fontSize: 25, fontWeight: 'bold' },
                    headerRight: () => (
                        <Pressable
                        onPress={() => router.push("/home/eventdetail")}
                        style={styles.button}
                        >
                            <FontAwesome6 size={14} name="coins" color="#395873" style={styles.point}/>
                            <Text style={styles.buttonText}>1000</Text>
                            <AntDesign name="plus" size={14} color="black" style={styles.plus} />
              
                        </Pressable>
                    ),
                }}
            />
            <Tabs.Screen
                name="profile" 
                options = {{
                    title: 'profile', 
                    tabBarIcon: ({ color }) => <FontAwesome size={31} name="user" color={color} />,
                    tabBarStyle: TabBarStyle,
                    headerTitle: "Profile",
                    headerTintColor: "#395873",
                    headerTitleStyle: { fontSize: 25, fontWeight: 'bold' },
                    headerRight: () => (
                        <Pressable
                        onPress={() => router.push("/home/eventdetail")}
                        style={styles.button}
                        >
                            <FontAwesome6 size={14} name="coins" color="#395873" style={styles.point}/>
                            <Text style={styles.buttonText}>1000</Text>
                            <AntDesign name="plus" size={14} color="black" style={styles.plus} />
              
                        </Pressable>
                    ),
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