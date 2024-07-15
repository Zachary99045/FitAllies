import { Pressable, Text, View, StyleSheet} from "react-native";
import { Link, router } from "expo-router";
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function home() {
  return (
    <View style={styles.container}>
      <Text style={styles.upcomingEvent}>Upcoming Event</Text>
      <View style={styles.events}>

        <Pressable 
          onPress={() => router.push("/home/eventdetail")}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#E6F4FF' : '#E6F4FF',
              opacity: pressed ? 0.6 : 1,
            },
          styles.firstSingleEvent
          ]}
        > 
          <View style={styles.eventIconCircle}>
            <MaterialCommunityIcons name="badminton" size={24} color="#395873" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.eventText}>Badminton</Text>
            <Text style={styles.eventSubText}>TODAY   12 am - 2 pm</Text>
          </View>
          <Entypo name="dots-three-horizontal" size={20} color="black" style={styles.dot} />
        </Pressable>

        <Pressable 
          onPress={() => router.push("/home/eventdetail")}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? '#E6F4FF' : '#E6F4FF',
              opacity: pressed ? 0.6 : 1,
            },
          styles.otherSingleEvent
          ]}
        > 
          <View style={styles.eventIconCircle}>
            <MaterialCommunityIcons name="yoga" size={24} color="#395873" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.eventText}>Yoga</Text>
            <Text style={styles.eventSubText}>6/23   4 pm - 5 pm</Text>
          </View>
          <Entypo name="dots-three-horizontal" size={20} color="black" style={styles.dot} />
        </Pressable>
      </View>
    </View>
    

  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent:"center"
  },
  upcomingEvent: {
    position:'absolute',
    top:20,
    left: 40,
    color: '#395873',
    fontSize: 20,
    fontWeight: 'bold',
  },
  events:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    position:'absolute',
    top:65,
    backgroundColor:"transparent",
    borderWidth:3,
    borderColor:"#395873",
    width:340,
    paddingVertical:20,
    borderRadius:30
  },
  firstSingleEvent:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    width:300,
    height:60,
    borderWidth:3,
    borderColor:"#395873",
    borderRadius:30,
  },
  otherSingleEvent:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    width:300,
    height:60,
    borderWidth:3,
    borderColor:"#395873",
    borderRadius:30,
    marginTop:10
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
  }
});