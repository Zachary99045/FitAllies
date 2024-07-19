import { Stack } from "expo-router";
import CustomHeader from "@/components/CustomHeader";
import CustomHeaderBack from "@/components/CustomHeaderBack";

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <CustomHeader title="Home" />,
        }}
      />
      <Stack.Screen 
        name="eventdetail" 
        options={{
        header: () => <CustomHeaderBack title="Event Detail" />,
        }}/>
    </Stack>
  );
};
