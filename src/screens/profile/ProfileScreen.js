import { StatusBar } from "expo-status-bar";
import React from "react";
import Button from "../../components/Button";

import { StyleSheet, Text, View, ScrollView } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSelector } from "react-redux";

export default function ProfileScreen({ navigation }) {
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
          <View style={{ padding: 10, backgroundColor: "#eeed" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>Username</Text>
            <Text>dodziraynard</Text>
          </View>

          <View style={{ marginVertical: 10 }}>
            <Button
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
              backgroundColor="#33e"
              text="Logout"
            />
          </View>

          <View>
            <Button
              backgroundColor="#5BBC9D"
              text="Register New"
              onPress={() => {
                navigation.navigate("RegisterScreen");
              }}
            />
          </View>
        </ScrollView>
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
