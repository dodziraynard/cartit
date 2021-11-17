import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function CartComponent({ navigation }) {
  const cartItems = useSelector((state) => state.cartItems.cartItems);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CartScreen")}
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
        <Text style={{ color: "white", textAlign: "center" }}>
          {cartItems.length}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
