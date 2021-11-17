import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { UPDATE_ITEM_QUANTITY } from "../redux/actions/types";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  function updateQuantity(id, quantity) {
    dispatch({
      type: UPDATE_ITEM_QUANTITY,
      payload: { id, quantity },
    });
  }

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
      <TouchableOpacity
        onPress={() => updateQuantity(item.id, 0)}
        style={{
          padding: 4,
          position: "absolute",
          top: 0,
          right: 10,
          backgroundColor: "#eee3",
          borderRadius: 10,
        }}
      >
        <AntDesign
          name="close"
          size={20}
          color="red"
          style={{ alignSelf: "center" }}
        />
      </TouchableOpacity>

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
          {item.product.name}
        </Text>
        <Text
          style={{
            padding: 3,
            fontSize: 14,
            width: widthPercentageToDP("49%"),
            overflow: "hidden",
            height: 20,
          }}
        >
          {item.product.summary}
        </Text>
        <Text style={{ fontSize: 18, color: "orange", fontWeight: "600" }}>
          GHC {item.product.price * item.quantity}
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() =>
            updateQuantity(
              item.id,
              item.quantity - 1 > 0 ? item.quantity - 1 : item.quantity
            )
          }
          style={{
            padding: 10,
            backgroundColor: "#eee",
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>

        <Text style={{ margin: 1, fontSize: 20 }}>{item.quantity}</Text>

        <TouchableOpacity
          onPress={() =>
            updateQuantity(
              item.id,
              item.quantity + 1 > 0 ? item.quantity + 1 : item.quantity
            )
          }
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
