import * as React from 'react'
import { useState, useEffect} from 'react'
import { Text, TextInput, View, Alert, StyleSheet, AppState, Pressable} from 'react-native'
import { supabase } from '@/lib/supabaseClient'
import { Session } from '@supabase/supabase-js'
import { router} from "expo-router";
import DateTimePicker from '@react-native-community/datetimepicker';


export default function fillOutBasicInfo() {
   
  

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome back
      </Text>
      <Pressable onPress={() => router.push("/home")}>
        <Text>Forgot Password?</Text>
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
    fontSize: 15,
    color: "black",
    fontWeight: "regular",
    marginBottom: 10,
  },
  textlarge: {
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
    backgroundColor: '#395873',
  },
  textInput: {
    backgroundColor: "#F7F8F8", // Corrected color value with '#'
    borderRadius: 14,
    padding: 12,
    margin: 8,
    width: '80%', // Optionally, set width to maintain layout consistency
  }
})