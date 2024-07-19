import { SafeAreaView, Pressable, Text, View, StyleSheet, ScrollView} from "react-native";

export default function eventdetail() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.subHeader}>Sport</Text>
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
  subHeader: {
    marginTop:20,
    marginLeft:20,
    marginBottom:15,
    color: '#395873',
    fontSize: 22,
    fontWeight: 'bold',
  },
})