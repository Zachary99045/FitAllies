import { Text, View } from "react-native";
import Heart from '@/src/icons/heart';

export default function chat() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heart />
      <Text>chat</Text>
    </View>
    
  );
}
