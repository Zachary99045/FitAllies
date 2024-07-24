import { SafeAreaView, Pressable, Text, View, StyleSheet, ScrollView, TextInput, Image, ImageBackground} from "react-native";
import { router } from "expo-router";
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';

export default function createEvent() {
  const [eventName, setEventName] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground 
          source={require('../assets/images/sports/badminton.jpg')} 
          style={styles.bgimage}
          imageStyle={{borderTopLeftRadius:30, borderTopRightRadius:30}}
        />
        <LinearGradient
        colors={['transparent', 'white']}
        style={styles.white}
        />
        <View style ={styles.subContainer}>
          <View style = {styles.eventIconBox}>
            <View style = {styles.eventIcon}>
              <MaterialCommunityIcons name="badminton" size={30} color="#395873" />
            </View>
            <Pressable 
              onPress={() => router.push("/home")}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? '#E8EFF5' : '#E8EFF5',
                  opacity: pressed ? 0.6 : 1,
                },
                styles.add
              ]}
            >
              <AntDesign name="plus" size={14} color="black"/>
            </Pressable>
          </View>

          <TextInput
            style = {styles.textInput}
            onChangeText={(text) => setEventName(text)}
            placeholder="Enter Event Name"
            autoCapitalize={'none'}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal:20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer:{
    marginTop: -130,
    borderWidth:0,
    width:"100%",
    flex:1,
    flexDirection:'column',
    alignItems:'flex-start'
  },
  eventIconBox:{
    marginLeft:30,
    marginBottom:20,
    justifyContent:'center',
    alignItems: 'flex-end',
    width:70,
    height:70,
  },
  eventIcon:{
    justifyContent:'center',
    alignItems: 'center',
    width:70,
    height:70,
    borderWidth:2,
    backgroundColor:"#C2D6E6",
    borderColor:"#395873",
    borderRadius:35,
  },
  add:{
    width:20,
    height:20,
    borderRadius:10,
    marginTop:-20,
    justifyContent:'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textInput: {
    backgroundColor: "transparent",
    borderWidth:1.5,
    borderColor:"#395873",
    borderRadius: 8,
    padding: 5,
    paddingHorizontal:20,
    marginHorizontal: 20,
    fontSize:25,
    fontWeight: 'bold',
    color:'#395873'
  },
  bgimage: {
    marginTop:15,
    flex: 1,
    resizeMode: 'cover',
    width:345,
    height:300,
    borderTopRightRadius:30,
    borderTopLeftRadius:30
  },
  white:{
    marginTop:-235,
    height:250,
    width:'100%'
  }
})