import {Tabs} from "expo-router";

export default () =>{
    return(
        <Tabs>
            <Tabs.Screen name="home" options = {{headerShown: false}}/>
            <Tabs.Screen name="chat" options = {{headerShown: false}}/>
            <Tabs.Screen name="meet" options = {{headerShown: false}}/>
            <Tabs.Screen name="point" options = {{headerShown: false}}/>
            <Tabs.Screen name="profile" options = {{headerShown: false}}/>
        </Tabs>
    ); 
};