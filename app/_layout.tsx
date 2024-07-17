import { Stack } from "expo-router";
import CustomHeader from "@/components/CustomHeader";
import CreatePageHeader from "@/components/CreatePageHeader";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" 
      options = {{headerShown: false}}/>
      <Stack.Screen name="(auth)" 
      options = {{headerShown: false}}/>
      <Stack.Screen name="index" 
      options = {{headerShown: false}}/>
      <Stack.Screen name="createEvent"
      options ={{header: () => <CreatePageHeader title="Create Event" />}}/>
    </Stack>
  );
}
