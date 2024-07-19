import { SafeAreaView, Pressable, Text, View, StyleSheet, ScrollView} from "react-native";
import Heart from '@/src/icons/heart';
import { router } from "expo-router";

export default function chat() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Heart />
        <Text>chat</Text>
        <Pressable 
        onPress={() => router.push("/createEvent")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#E6F4FF' : '#E6F4FF',
            opacity: pressed ? 0.6 : 1,
          },
        ]}
      >
        <Text>Creat Event</Text>
      </Pressable>
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 85,
    paddingHorizontal:20
  },
})