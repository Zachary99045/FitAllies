import { SafeAreaView, Pressable, Text, View, StyleSheet, ScrollView, TextInput} from "react-native";
import { router } from "expo-router";
import React, { useState } from 'react'

export default function createEvent() {
  const [eventName, setEventName] = useState('');
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