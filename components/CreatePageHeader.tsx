import React from "react";
import { router} from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { FontAwesome6, AntDesign } from "@expo/vector-icons";

const CreatePageHeader = ({ title }:CustomHeaderProps) => {
  
  return (
    <View style={styles.header}>
      <Pressable onPress={() => router.push("/home")}>
        <AntDesign name="caretleft" size={24} color="#395873" />
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>

    </View>
  );
};
interface CustomHeaderProps {
    title: string;
  }
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal:30,
    paddingBottom:15,
    paddingTop:30,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#395873",
    marginLeft:20
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

export default CreatePageHeader;
