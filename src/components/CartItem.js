import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { widthPercentageToDP } from "react-native-responsive-screen";

export default function CartItem({ navigation, title }) {
  return (
    <View
      style={{
        padding: 10,
        margin: 5,
        borderBottomColor: "#eee",
        borderBottomWidth: 2,
        borderRadius: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Image
        source={require("../../assets/generics/intropage.png")}
        style={{
          width: 100,
          height: 100,
          marginBottom: 5,
          resizeMode: "center",
        }}
      />

      <View>
        <Text
          style={{
            fontSize: 20,
            width: widthPercentageToDP("49%"),
            color: "#723af5",
            overflow: "hidden",
            fontWeight: "600",
          }}
        >
          Beats Solo HD
        </Text>
        <Text
          style={{
            fontSize: 14,
            width: widthPercentageToDP("49%"),
            overflow: "hidden",
          }}
        >
          Product one-line
        </Text>
        <Text style={{ fontSize: 18, color: "orange", fontWeight: "600" }}>
          GHC 300
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "#eee",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>

        <Text style={{ margin: 1, fontSize: 20 }}>3</Text>

        <TouchableOpacity
          style={{
            padding: 10,
            marginLeft: 1,
            backgroundColor: "#eee",
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
