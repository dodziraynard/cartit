import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function RegisterScreen({ navigation }) {
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
        <Text style={{ fontSize: 30, margin: 20 }}>Register Now</Text>
        <Input label="Username" placeholder="dodziraynard" />
        <Input
          label="Password"
          placeholder="***********"
          secureTextEntry={true}
        />
        <Input
          label="Repeat Password"
          placeholder="***********"
          secureTextEntry={true}
        />

        <Button backgroundColor="#33e" text="Register" onPress={() => {}} />
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
