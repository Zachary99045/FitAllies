import {Stack} from "expo-router";

export default () =>{
    return (
    <Stack>
        <Stack.Screen name="login" options = {{headerShown: false}}/>
        <Stack.Screen name="signin" options = {{headerShown: false}}/>
        <Stack.Screen name="signup" options = {{headerShown: false}}/>
        <Stack.Screen name="basicInfo" options = {{headerShown: false}}/>
        <Stack.Screen name="passwordrecovery" options = {{headerShown: false}}/>
    </Stack>
    );
}