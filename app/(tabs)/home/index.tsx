import { Pressable, Text, View, StyleSheet} from "react-native";
import { Link } from "expo-router";

export default function home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome!</Text>
      </View>
      <View style={styles.event}>
        <Link href="/home/eventdetail" asChild>
          <Pressable>
            <Text style={styles.badminton}>Badminton</Text>
          </Pressable>
        </Link>
      </View>
      
    </View>
    

  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position:'absolute',
    top:0,
    left: 0,
    height:90,
    backgroundColor: 'white',
    width: '140%'
  },
  headerText: {
    position:'absolute',
    top:40,
    left: 40,
    color: '#395873',
    fontSize: 25,
    fontWeight: 'bold',
  },
  event:{
    position:'absolute',
    top:150,
    backgroundColor:"#E6F4FF",
    width:"65%",
    height:60,
    borderRadius:30
  },
  badminton:{
    color: '#395873',
    textAlign: 'center',
    fontWeight: 'bold',
    top:18,
  }
});