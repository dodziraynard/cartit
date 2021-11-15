import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Button from "../../components/Button";

export default function IntroductionScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: hp("8%"),
              fontWeight: "bold",
            }}
          >
            Cart
          </Text>

          <Text
            style={{
              fontSize: hp("8%"),
              fontWeight: "bold",
              color: "cyan",
            }}
          >
            i
          </Text>
          <Text
            style={{
              fontSize: hp("8%"),
              fontWeight: "bold",
            }}
          >
            t
          </Text>
        </View>

        <Text
          style={{
            fontSize: 26,
            fontWeight: "400",
          }}
        >
          Just cart it.
        </Text>
      </View>
      <View
        style={{
          flex: 2,
        }}
      >
        {/* Image part */}
        <ImageBackground
          source={require("../../../assets/generics/intropage.png")}
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: hp("5%"),
                paddingHorizontal: hp("2.5%"),
              }}
            >
              <Button
                onPress={() => {
                  navigation.navigate("RegisterScreen");
                }}
                backgroundColor="#33e"
                text="Register"
              />
              <Button
                backgroundColor="#5BBC9D"
                text="Login"
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
              />
            </View>
          </View>
        </ImageBackground>
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
