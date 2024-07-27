import { SafeAreaView, Pressable, Text, View, StyleSheet, ScrollView, TextInput, ImageBackground, Image, Modal} from "react-native";
import { router } from "expo-router";
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import {AntDesign, MaterialCommunityIcons, Ionicons, FontAwesome6, FontAwesome, Feather  } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list'

export default function createEvent() {
  const [eventName, setEventName] = useState('');
  const[eventLocation, setEventLocation] = useState('');
  const[eventStartDate, setEventStartDate] = useState('');
  const[eventEndDate, setEventEndDate] = useState('');
  const[eventStartTime, setEventStartTime] = useState('');
  const[eventEndTime, setEventEndTime] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selected, setSelected] = useState("");
  const data =[
    {key:'1', value:'AM'},
    {key:'2', value:'PM'}
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground 
          source={require('../assets/images/sports/ballet.jpg')} 
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
              onPress={() => setIsModalVisible(true)}
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
            style = {styles.eventTitle}
            onChangeText={(text) => setEventName(text)}
            placeholder="Enter Event Name"
            autoCapitalize={'none'}
          />

          <View style={styles.location}>
            <Ionicons name="location-sharp" size={24} color="#395873" style={{marginRight:5, marginTop:5}}/>
            <TextInput 
              style = {styles.eventDetailTextBox}
              onChangeText={(text) => setEventLocation(text)}
              placeholder="1135 NE Campus Pkwy, Seattle, WA 98105"
              autoCapitalize={'none'}
            />
          </View>

          <View style={styles.time}> 
            <FontAwesome6 name="calendar-day" size={20} color="#395873" style={{marginRight:4, marginLeft:3}}/>
            <View style={styles.timeDetail}>
              <Text style={{marginLeft:15, color:'#656565', fontSize:12}}>From</Text>
              <View style={styles.time}>
                <TextInput 
                  style={styles.eventDetailTextBox}
                  onChangeText={(text) =>setEventStartDate(text)}
                  placeholder="MM/DD/YY"
                />
                <TextInput 
                  style={styles.eventDetailTextBox}
                  onChangeText={(text) =>setEventStartTime(text)}
                  placeholder="12:30"
                />
                <SelectList 
                  setSelected={setSelected} 
                  data={data} 
                  save="value"
                  placeholder="AM"
                  inputStyles={{fontSize:14, fontWeight:"thin"}}
                  dropdownStyles={{backgroundColor:"#F7F8F8", borderWidth:0, paddingHorizontal:10}}
                  boxStyles={{height:38, paddingTop:9, backgroundColor:"#F7F8F8", borderWidth:0, borderRadius:5}}
                />
              </View>
              <Text style={{marginLeft:15, color:'#656565', fontSize:12}}>To</Text>
              <View style={styles.time}>
                <TextInput 
                  style={styles.eventDetailTextBox}
                  onChangeText={(text) =>setEventEndDate(text)}
                  placeholder="MM/DD/YY"
                />
                <TextInput 
                  style={styles.eventDetailTextBox}
                  onChangeText={(text) =>setEventEndTime(text)}
                  placeholder="02:00"
                />
                <SelectList 
                  setSelected={setSelected} 
                  data={data} 
                  save="value"
                  placeholder="AM"
                  inputStyles={{fontSize:14, fontWeight:"thin"}}
                  dropdownStyles={{backgroundColor:"#F7F8F8", borderWidth:0, paddingHorizontal:10}}
                  boxStyles={{height:38, paddingTop:9, backgroundColor:"#F7F8F8", borderWidth:0, borderRadius:5}}
                />
              </View>
            </View>
          </View>

          <View style={styles.participants}>
            <FontAwesome name="user-circle-o" size={20} color="#395873" style={{marginRight:4, marginLeft:2}}/>
            <Text style={styles.participantsTitle}>Participants</Text>
            <Pressable               
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.6 : 1,
                },
                styles.addParticipant
              ]}
            >
              <Ionicons name="add-circle-outline" size={24} color="#87AECF" />
            </Pressable>
          </View>
          <View style={styles.singleParticipant}>
            <Image 
              source={require('../assets/images/pudding.jpg')} 
              style={styles.profile}

            />
            <Text style ={styles.participantsTitle}>
              Hammy
            </Text>
            <FontAwesome name="user-circle-o" size={20} color="#395873" style={{marginLeft:'auto', marginRight:20}}/>
          </View>
          <View style={styles.singleParticipant}>
            <Image 
              source={require('../assets/images/pudding2.jpg')} 
              style={styles.profile}

            />
            <Text style ={styles.participantsTitle}>
              Pudding
            </Text>
            <Pressable             
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.6 : 1,
                },
                {marginLeft:'auto', marginRight:20}
              ]}
            >
            <Feather name="x-circle" size={20} color="#395873" />
            </Pressable>
          </View>
          <View style={styles.singleParticipant}>
            <Image 
              source={require('../assets/images/pudding2.jpg')} 
              style={styles.profile}

            />
            <Text style ={styles.participantsTitle}>
              Pudding
            </Text>
            <Pressable             
              style={({ pressed }) => [
                {
                  opacity: pressed ? 0.6 : 1,
                },
                {marginLeft:'auto', marginRight:20}
              ]}
            >
            <Feather name="x-circle" size={20} color="#395873" />
            </Pressable>
          </View>
          <Pressable 
            style={({ pressed }) => [
              {
                opacity: pressed ? 0.6 : 1,
              },
              styles.done
            ]}
            onPress={() => router.push("/home")}
          >
            <Text style={styles.doneText}>
              Done
            </Text>
          </Pressable>
        </View>

        <Modal 
          visible={isModalVisible} 
          animationType="fade"
          onRequestClose={() => setIsModalVisible(false)}
          transparent={true}
        >
          <View style={styles.overlay}>
            <Pressable 
              style={styles.clickOut} 
              onPress={() => setIsModalVisible(false)}
            />
            <View style={styles.popUp}>
              <Pressable style={styles.changeIcon}>
                <View>
                  <Text style={styles.popText}>
                    Change Event Icon
                  </Text>
                </View>
              </Pressable>
              <Pressable style={styles.changeBackground}>
                <View>
                  <Text style={styles.popText}>
                    Change Event Background
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </Modal>

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
    marginTop:-250,
    height:250,
    width:'100%'
  },
  subContainer:{
    marginTop: -130,
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
  eventTitle: {
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
  eventDetailTextBox:{
    backgroundColor:'#F7F8F8',
    padding:5,
    paddingHorizontal:10,
    borderRadius:5,
    marginHorizontal:5,
    fontSize:14
  },
  location:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'flex-start',
    marginTop:40,
    marginLeft:5,
    marginBottom:10
  },
  time:{
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems:'flex-start',
    marginLeft:5
  },
  timeDetail:{
    flexDirection:'column',
    justifyContent: 'flex-start',
  },
  participants:{
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    width:'100%',
    marginLeft:5,
    marginTop:5,
    marginBottom:10,
  },
  participantsTitle:{
    color:'#395873',
    fontSize:15,
    fontWeight:'500',
    marginLeft:15
  },
  addParticipant:{
    marginLeft:'auto',
    marginRight:40
  },
  singleParticipant:{
    flexDirection:'row',
    justifyContent: 'flex-start',
    alignItems:'center',
    backgroundColor: '#E8EFF5',
    borderRadius:30,
    paddingVertical:5,
    marginTop:5,
    width:"80%",
    alignSelf:'center'
  },
  profile:{
    marginLeft:6,
    width:36,
    height:36,
    borderRadius:18,
    resizeMode: 'cover',
  },
  overlay:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  clickOut:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent'
  },
  popUp:{
    flexDirection:'column',
    borderRadius:30,
    padding:0,
    backgroundColor:'transparent',
    position:'absolute',
    top:340,
    alignSelf:'center'
  },
  changeIcon:{
    backgroundColor:'white',
    alignSelf:'center',
    alignItems:'center',
    borderColor:'#C2D6E6',
    borderBottomWidth:1,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    paddingVertical:15,
    width:250
  },
  changeBackground:{
    backgroundColor:'white',
    alignSelf:'center',
    alignItems:'center',
    borderColor:'#C2D6E6',
    borderTopWidth:1,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    paddingVertical:15,
    width:250
  },
  popText:{
    color:'#395873',
    fontSize:16,
    fontWeight:'400'
  },
  done:{
    alignSelf:'center',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    backgroundColor:"#395873",
    width:"60%",
    paddingVertical:5,
    marginTop:30
  },
  doneText:{
    fontSize:20,
    fontWeight:'500',
    color:'white'
  }
})