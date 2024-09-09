import React, { useState } from 'react'
import { Text, Alert, StyleSheet, View, TextInput, Pressable} from 'react-native'

import { supabase } from '@/lib/supabaseClient'

export default function updatePassword() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  async function resetPassword() {
    setLoading(true)
    const { error } = await supabase.auth.updateUser({
        email: email,
        password: password,
    })

    if (error){
        Alert.alert("Unvalid Email or Password", error.message);
    } else {
        Alert.alert('Success','Password recovery email sent!');
    }
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
       Reset Password
      </Text>
      <TextInput
        style = {styles.textInput}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="email@address.com"
        autoCapitalize={'none'}
      />

      <TextInput
        style = {[styles.textInput,{marginBottom:350}]}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        autoCapitalize={'none'}
      />
      <Pressable style ={styles.Pressable} disabled={loading} onPress={() => resetPassword()}>
        <Text>Reset Password</Text>
      </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center', // Centers children vertically
    alignItems: 'center', // Centers children horizontally
  },
  text: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginBottom: 30,
  },
  forgotpass: {

  },
  Pressable: {
    width: '80%',
    padding: 10,
    margin: 20,
    borderRadius: 67.18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#395873',
    borderStyle: 'solid'
  },
  textInput: {
    backgroundColor: "#F7F8F8", // Corrected color value with '#'
    borderRadius: 14,
    padding: 12,
    margin: 8,
    width: '80%', // Optionally, set width to maintain layout consistency
  }
})