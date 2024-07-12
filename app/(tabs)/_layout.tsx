import {Tabs} from "expo-router";

export default () =>{
    return(
        <Tabs>
            <Tabs.Screen name="home" />
            <Tabs.Screen name="chat" />
            <Tabs.Screen name="meet" />
            <Tabs.Screen name="point" />
            <Tabs.Screen name="profile" />
        </Tabs>
    ); 
};