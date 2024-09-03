import { SafeAreaView, Pressable, Text, StyleSheet, ScrollView, Alert} from "react-native";
import {supabase} from '@/lib/supabaseClient'
import {useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'

export default function profile() {
  const [firstName, setFirstName] = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthday, setbirthday] = useState(new Date)
  const [gender, setdGender] = useState('')
  const [intro, setIntro] = useState('')
  const [loading, setLoading] = useState(false)
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: sessionData } = await supabase.auth.getSession();
      setSession(sessionData.session);
    };

    fetchSession();
  }, []);

  useEffect(() => {
    if (session) getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')
      
      console.log('Fetched Profile Data:', session.user.identities);
      const { data, error, status } = await supabase
        .from('profiles')
        .select()
        .eq('id', session?.user.id)
        .single();

      console.log('Fetched Profile Data:', data);
      console.log('Supabase Error:', error);
      console.log('Supabase Status:', status);
      if (error && status !== 406) {
        throw error
      }
      
      if (data) {
        setFirstName(data.firstName)
        setMiddleName(data.middleName)
        setLastName(data.lastName)
        setbirthday(data.birthday)
        setdGender(data.gender)
        setIntro(data.intro)
      }
      
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  const doLogout = async () =>{
    const {error} = await supabase.auth.signOut();
    if (error) {
      Alert.alert("Error Signing Out User")
    }
  }
  const checkGetProfile = () =>{
    console.log(session);
    if (session) getProfile()
    console.log("check")
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.subHeader}>Profile</Text>
        <Text>{firstName}</Text>
        <Text>{middleName}</Text>
        <Text>{lastName}</Text>
        <Text>{gender}</Text>
        <Pressable style ={styles.Pressable} onPress={() => checkGetProfile()}  >
          <Text style ={{color: "white"}}>TestProfileShow</Text>
        </Pressable>
        <Pressable style ={styles.Pressable} onPress={() => doLogout()}  >
          <Text style ={{color: "white"}}>Sign Out</Text>
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