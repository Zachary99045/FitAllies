import { SafeAreaView, Pressable, Text, View, StyleSheet, ScrollView} from "react-native";

export default function point() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text>point</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
    paddingBottom: 85
  },
})