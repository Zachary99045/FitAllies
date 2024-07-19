import React from "react";
import { router} from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome6, AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ title }:CustomHeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.goBack()}>
        <AntDesign name="caretleft" size={24} color="#395873" />
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
      <Pressable
        onPress={() => router.push("/point")}
        style={styles.button}
      >
        <FontAwesome6 size={14} name="coins" color="#395873" style={styles.point} />
        <Text style={styles.buttonText}>1000</Text>
        <AntDesign name="plus" size={14} color="black" style={styles.plus} />
      </Pressable>
    </View>
  );
};
interface CustomHeaderProps {
    title: string;
  }
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal:30,
    paddingBottom:15,
    paddingTop:30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#395873",
    marginRight:30
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: "#395873",
  },
  buttonText: {
    color: "#395873",
    fontSize: 13,
    fontWeight: "normal",
    marginHorizontal: 5,
  },
  plus: {
    marginLeft: 5,
  },
  point: {
    marginRight: 5,
  },
});

export default CustomHeader;
