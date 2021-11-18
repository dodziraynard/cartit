import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function LoginScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#F6F6F6",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 30, margin: 20 }}>Login to continue</Text>
        <Input label="Username" placeholder="dodziraynard" />
        <Input
          label="Password"
          placeholder="dodziraynard"
          secureTextEntry={true}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterScreen")}
          style={{ margin: 10, flexDirection: "row" }}
        >
          <Text>Don't have an account? </Text>
          <Text style={{ color: "blue" }}>Register</Text>
        </TouchableOpacity>

        <Button
          backgroundColor="#5BBC9D"
          text="Login"
          onPress={() => navigation.navigate("HomeScreen")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
