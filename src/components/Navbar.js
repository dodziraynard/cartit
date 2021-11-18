import React, { useState } from "react";
import CartComponent from "./CartComponent";

import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { SET_QUERY } from "../redux/actions/types";

export default function Navbar({ navigation }) {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  function searchAndDisplayProducts() {
    dispatch({
      type: SET_QUERY,
      payload: query,
    });
    navigation.navigate("ProductsScreen", { query });
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#723af5",
          height: 200,
          width: wp("100%"),
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          position: "absolute",
        }}
      />

      <View style={styles.navbar}>
        <View
          style={{
            backgroundColor: "#eeef",
            flexDirection: "row",
            alignItems: "center",
            flex: 2,
            margin: 10,
            borderRadius: 20,
            fontSize: 20,
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={{ flex: 1, padding: 15 }}
            onChangeText={setQuery}
            placeholderTextColor="#333"
            placeholder="I want to cart ..."
          />
          <TouchableOpacity
            onPress={() => (query.length > 0 ? searchAndDisplayProducts() : "")}
          >
            <EvilIcons name="search" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <CartComponent navigation={navigation} />
        <TouchableOpacity
          onPress={() => navigation.navigate("ProfileScreen")}
          style={{
            alignSelf: "center",
            marginRight: 10,
            padding: 10,
            borderRadius: 20,
            backgroundColor: "#eeee",
          }}
        >
          <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeee",
  },
  navbar: {
    flexDirection: "row",
    marginTop: Constants.statusBarHeight,
  },
});
