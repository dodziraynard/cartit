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

export default function CheckOutScreen({ navigation }) {
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
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: "#333",
            }}
          >
            Update your details to checkout.
          </Text>
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
            backgroundColor: "#723af5",
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
            GHC 9849
          </Text>
          <TouchableOpacity
            style={{ backgroundColor: "orange", padding: 10, borderRadius: 10 }}
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
