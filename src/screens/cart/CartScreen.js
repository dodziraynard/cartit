import { StatusBar } from "expo-status-bar";
import React from "react";
import CartItem from "../../components/CartItem";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSelector } from "react-redux";

export default function CartScreen({ navigation }) {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const totalPrice = useSelector((state) => state.cartItems.totalPrice);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View
        style={{
          height: hp("85%"),
          marginTop: 5,
          marginHorizontal: 10,
        }}
      >
        <ScrollView>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate("ProductDetailsScreen", {
                    product: item.product,
                    color: item.color,
                    size: item.size,
                  })
                }
              >
                <CartItem item={item} />
              </TouchableOpacity>
            ))
          ) : (
            <Text
              style={{
                fontSize: 20,
                textAlign: "center",
                marginTop: 40,
                fontWeight: "600",
                color: "grey",
              }}
            >
              Your cart is empty :(
            </Text>
          )}
        </ScrollView>

        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            marginHorizontal: 10,
            justifyContent: "space-around",
            alignItems: "center",
            padding: 10,
            borderRadius: 10,
            backgroundColor: totalPrice > 0 ? "#723af5" : "grey",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: "white",
              }}
            >
              Total
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: "white",
              }}
            >
              5 items
            </Text>
          </View>

          <Text
            style={{
              fontSize: 30,
              fontWeight: "600",
              color: "white",
            }}
          >
            GHC {totalPrice}
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("CheckOutScreen")}
            disabled={totalPrice < 1}
            style={{
              backgroundColor: totalPrice > 0 ? "orange" : "#aaa",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Text>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});
