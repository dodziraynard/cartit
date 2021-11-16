import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";

export default function OrderReceived({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text
        style={{
          color: "green",
          fontSize: 30,
          textAlign: "center",
          margin: 20,
        }}
      >
        Order Received
      </Text>
      <Text style={{ fontSize: 20, margin: 5, textAlign: "center" }}>
        Your order has been received. We'll be in touch to ensure a successful
        delivery.
      </Text>
      <Text style={{ fontSize: 20, margin: 20, textAlign: "center" }}>
        Thank you for choosing Cartit
      </Text>
      <View style={{ alignItems: "center" }}>
        <Button
          backgroundColor="#33e"
          text="Explore More"
          onPress={() => navigation.navigate("HomeScreen")}
        />
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
