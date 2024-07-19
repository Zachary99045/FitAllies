import { SafeAreaView, Pressable, Text, StyleSheet, ScrollView, Alert} from "react-native";
import {supabase} from '@/lib/supabaseClient'

export default function profile() {

  const doLogout = async () =>{
    const {error} = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Error Signing Out User")
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.subHeader}>Profile</Text>
      </ScrollView>
      <Pressable style ={styles.Pressable}onPress={() => doLogout()}  >
        <Text style ={{color: "white"}}>Sign Out</Text>
      </Pressable>
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
  Pressable: {
    width: '80%',
    padding: 10,
    margin: 20,
    borderRadius: 67.18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#395873',
  },
})