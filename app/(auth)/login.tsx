import { Image, View, Pressable,Text,StyleSheet} from "react-native";
import { router} from "expo-router";
import * as React from 'react';

export default function login() {

  return (
    <View style = {styles.container}>
      <Image source={require('../../assets/images/logo1.png')} style={styles.icon} />
      <Pressable style = {[styles.Pressable , {backgroundColor: '#395873'}]} onPress={() => router.push("/signin")}>
        <Text style = {styles.PressableText}>Sign in</Text>
      </Pressable>
      <Pressable style = {[styles.Pressable, {backgroundColor: 'white'}]}  onPress={() => router.push("/signup")}>
        <Text style = {[styles.PressableText,{color: '#395873'}]}>Sign up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      justifyContent: 'center', // Centers children vertically
      alignItems: 'center', // Centers children horizontally
    },
    icon: {
        width: 100, // Set the width of the icon
        height: 100, // Set the height of the icon
        marginBottom: 150, // Add margin to space out the icon and buttons
      },
    Pressable: {
      width: '80%',
      padding: 10,
      margin: 4,
      borderRadius: 67.18,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#395873',
      borderStyle: 'solid'
    },
    PressableText: {
      color: '#FFFFFF',
      fontSize: 16,
      textAlign: 'center',
      
    }
  });

