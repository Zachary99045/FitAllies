import { SafeAreaView, Pressable, Text, View, StyleSheet, ScrollView} from "react-native";
import { router } from "expo-router";

export default function home() {
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text>create event</Text>
        </ScrollView>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
      backgroundColor: 'white',
      flex: 1,
      paddingBottom: 85,
      paddingHorizontal:20
    },
})