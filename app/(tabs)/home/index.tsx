import { SafeAreaView, Pressable, Text, View, StyleSheet, ScrollView} from "react-native";
import { router } from "expo-router";
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


export default function home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.subHeader}>Upcoming Event</Text>
      <View style={styles.events}>

        <FirstEventPressable 
          eventType="Badminton"
          eventTime="TODAY 12 am - 2 pm"
          icon={<MaterialCommunityIcons name="badminton" size={24} color="#395873" />}
          onPress={() => router.push("/home/eventdetail")}
        />

        <EventPressable 
          eventType="Yoga"
          eventTime="6/23 4 pm - 5 pm"
          icon={<MaterialCommunityIcons name="yoga" size={24} color="#395873" />}
          onPress={() => router.push("/home/eventdetail")}
        />
                  
      </View>
      <Text style={styles.subHeader}>July 2024</Text>
      <View style={styles.events}>

      </View>
      <Pressable 
        onPress={() => router.push("/createEvent")}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#E6F4FF' : '#E6F4FF',
            opacity: pressed ? 0.6 : 1,
          },
          styles.otherSingleEvent,
        ]}
      >
        <Text style={styles.eventText}>Creat Event</Text>
      </Pressable>
      
      </ScrollView>
    </SafeAreaView>
  );
}

const FirstEventPressable = ({ eventType, eventTime, icon, onPress }: EventPressableProps) => (
  <Pressable 
    onPress={onPress}
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#E6F4FF' : '#E6F4FF',
        opacity: pressed ? 0.6 : 1,
      },
      styles.firstSingleEvent
    ]}
  >
    <View style={styles.eventIconCircle}>
      {icon}
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.eventText}>{eventType}</Text>
      <Text style={styles.eventSubText}>{eventTime}</Text>
    </View>
    <Entypo name="dots-three-horizontal" size={20} color="black" style={styles.dot} />
  </Pressable>
);

const EventPressable = ({ eventType, eventTime, icon, onPress }: EventPressableProps) => (
  <Pressable 
    onPress={onPress}
    style={({ pressed }) => [
      {
        backgroundColor: pressed ? '#E6F4FF' : '#E6F4FF',
        opacity: pressed ? 0.6 : 1,
      },
      styles.otherSingleEvent,
    ]}
  >
    <View style={styles.eventIconCircle}>
      {icon}
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.eventText}>{eventType}</Text>
      <Text style={styles.eventSubText}>{eventTime}</Text>
    </View>
    <Entypo name="dots-three-horizontal" size={20} color="black" style={styles.dot} />
  </Pressable>
);

interface EventPressableProps {
  eventType: string;
  eventTime: string;
  icon: React.ReactNode;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
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
  events:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor:"transparent",
    borderWidth:3,
    borderColor:"#395873",
    width:"95%",
    paddingVertical:15,
    borderRadius:30,
  },
  firstSingleEvent:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    width:"90%",
    height:60,
    borderWidth:2.5,
    borderColor:"#395873",
    borderRadius:30,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  otherSingleEvent:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    width:"90%",
    height:60,
    borderWidth:2.5,
    borderColor:"#395873",
    borderRadius:30,
    marginTop:10,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  eventText:{
    color: '#395873',
    fontSize: 20,
    fontWeight: '500', 
  },
  eventSubText: {
    fontSize: 12,
    color: '#527491',
    fontWeight: 'semibold'
  },
  eventIcon: {
    marginLeft: 10,
  },
  eventIconCircle: {
    backgroundColor: "#C2D6E6",
    width: 42,
    height: 42,
    borderRadius: 21, 
    alignItems: "center",
    justifyContent: "center", 
    marginLeft: 6,
  },
  dot:{
    marginRight:15,
  },
});