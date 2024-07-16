import React, { useState } from 'react'
import { Text, Alert, StyleSheet, View, AppState , Button, TextInput, Pressable} from 'react-native'
import { supabase } from '@/lib/supabaseClient'

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome back
      </Text>
      <TextInput
        style = {styles.textInput}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="email@address.com"
        autoCapitalize={'none'}
      />
      
      <TextInput
        style = {[styles.textInput,{marginBottom:300}]}
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        autoCapitalize={'none'}
      />
      <Pressable style ={styles.Pressable} disabled={loading} onPress={() => signInWithEmail()}>
        <Text>Sign in</Text>
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