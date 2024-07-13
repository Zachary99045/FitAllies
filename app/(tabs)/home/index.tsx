import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Home</Text>
      <Link href="/home/eventdetail" asChild>
      <Pressable>
        <Text>To Event Detail</Text>
      </Pressable>
    </Link>
    </View>
    
  );
}