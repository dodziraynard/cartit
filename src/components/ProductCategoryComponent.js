import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

export default function ProductCategoryComponent({ navigation, category }) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductsScreen", { category })}
        style={{
          marginHorizontal: 10,
          alignSelf: "center",
          alignItems: "center",
          backgroundColor: "#0002",
          borderRadius: 20,
          padding: 10,
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
      <Text style={{ textAlign: "center" }}>{category.name}</Text>
    </View>
  );
}
