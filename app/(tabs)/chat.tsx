import { SafeAreaView, Pressable, Text, View, StyleSheet, ScrollView} from "react-native";
import Heart from '@/src/icons/heart';

export default function chat() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Heart />
        <Text>chat</Text>
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