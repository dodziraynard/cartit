import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ProductCategoryComponent({ navigation }) {
  return (
    <View>
      
      <TouchableOpacity
        style={{
          padding: 10,
          marginHorizontal: 10,
          alignSelf: "center",
          alignItems: "center",
          backgroundColor: "#a3a1",
          borderRadius: 20,
        }}
      >
        <Image
          source={require("../../assets/generics/intropage.png")}
          style={{
            width: 50,
            height: 50,
            marginBottom: 5,
            resizeMode: "center",
          }}
        />
      </TouchableOpacity>
      <Text style={{ textAlign: "center" }}>Electronics</Text>
    </View>
  );
}
