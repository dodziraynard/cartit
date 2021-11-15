import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CartComponent({ navigation }) {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        marginHorizontal: 10,
        alignSelf: "center",
        backgroundColor: "#eeee",
        borderRadius: 20,
      }}
    >
      <AntDesign name="shoppingcart" size={24} color="black" />

      <View
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          backgroundColor: "orange",
          borderRadius: 20,
          height: 22,
          width: 22,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>5</Text>
      </View>
    </TouchableOpacity>
  );
}
