import { router, Stack } from "expo-router";
import { Pressable, Text, StyleSheet,} from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

export default () =>{
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Welcome!",
          headerTintColor: "#395873",
          headerTitleStyle: { fontSize: 25, fontWeight: 'bold' },
          headerRight: () => (
            <Pressable
              onPress={() => router.push("/home/eventdetail")}
              style={styles.button}
            >
              <FontAwesome6 size={14} name="coins" color="#395873" style={styles.point}/>
              <Text style={styles.buttonText}>1000</Text>
              <AntDesign name="plus" size={14} color="black" style={styles.plus} />
              
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="eventdetail" 
      options = {{headerShown: false}}/>
    </Stack>
  );
}
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: 'transparent',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#395873',
    marginRight: 10, // Add margin to separate it from the edge
  },
  buttonText: {
    color: '#395873',
    fontSize: 13,
    fontWeight: 'normal',
    marginHorizontal:5
  },
  plus: {
    marginLeft: 5,
  },
  point: {
    marginRight: 5,
  },
});