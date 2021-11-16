import { StatusBar } from "expo-status-bar";
import React from "react";
import ProductImagesSwiper from "../../components/ProductImagesSwiper";
import { MaterialIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function CartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View
        style={{
          backgroundColor: "#723af5",
          height: 250,
          width: wp("100%"),
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          position: "absolute",
        }}
      />

      <View
        style={{
          height: hp("85%"),
          marginTop: Constants.statusBarHeight,
          marginHorizontal: 10,
        }}
      >
        <ScrollView>
          <View
            style={{
              alignSelf: "center",
              height: 250,
              marginVertical: 20,
              backgroundColor: "white",
              width: wp("95%"),
              borderRadius: 20,
              shadowColor: "#cccf",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.4,
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            <ProductImagesSwiper />
          </View>

          <View>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                marginVertical: 5,
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "500" }}>GHC 150</Text>

              <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")}
                style={{
                  borderRadius: 4,
                  backgroundColor: "#fefefe",
                  color: "white",
                  marginRight: 5,
                  padding: 10,
                }}
              >
                <MaterialIcons
                  name="add-shopping-cart"
                  size={30}
                  color="black"
                  style={{ alignSelf: "center" }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ fontSize: 30, color: "#000a", fontWeight: "500" }}>
            Nike Air Max 20
          </Text>

          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
              marginTop: 30,
              color: "#333",
            }}
          >
            Take your pick!
          </Text>

          <ScrollView horizontal>
            <View
              style={{
                alignSelf: "center",
                height: 120,
                margin: 5,
                flexDirection: "row",
                marginVertical: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 3,
                  borderColor: "#ccc",
                  borderColor: "red",
                  borderRadius: 15,
                  marginHorizontal: 10,
                  overflow: "hidden",
                  backgroundColor: "#eeee",
                  height: 120,
                  width: 120,
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../../assets/generics/intropage.png")}
                  style={{
                    width: wp("100%"),
                    height: 100,
                    width: 100,
                    resizeMode: "center",
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderWidth: 3,
                  borderColor: "#ccc",
                  borderColor: "#0000",
                  borderRadius: 15,
                  marginHorizontal: 10,
                  overflow: "hidden",
                  backgroundColor: "#eeee",
                  height: 120,
                  width: 120,
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../../../assets/generics/intropage.png")}
                  style={{
                    width: wp("100%"),
                    height: 100,
                    width: 100,
                    resizeMode: "center",
                  }}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
              marginTop: 30,
              color: "#333",
            }}
          >
            Select Size
          </Text>

          <ScrollView horizontal>
            <View
              style={{
                alignSelf: "center",
                height: 100,
                margin: 5,
                flexDirection: "row",
                marginVertical: 20,
              }}
            >
              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 15,
                  marginHorizontal: 10,
                  height: 100,
                  width: 100,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 28, padding: 30, fontWeight: "500" }}>
                  41
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 15,
                  marginHorizontal: 10,
                  height: 100,
                  width: 100,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 28, padding: 30, fontWeight: "500" }}>
                  41
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius: 15,
                  marginHorizontal: 10,
                  height: 100,
                  width: 100,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 28, padding: 30, fontWeight: "500" }}>
                  41
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  borderWidth: 1,
                  borderColor: "#ccc",
                  backgroundColor: "black",
                  borderRadius: 15,
                  marginHorizontal: 10,
                  height: 100,
                  width: 100,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 28,
                    padding: 30,
                    fontWeight: "500",
                    color: "white",
                  }}
                >
                  41
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>

          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
              marginTop: 30,
              color: "#333",
            }}
          >
            Description
          </Text>

          <Text
            style={{
              fontSize: 22,
              fontWeight: "500",
              marginTop: 5,
              color: "#555",
            }}
          >
            Step into the world of Nike Air Max at schuh. Shop women's, men's &
            kids Air Max in white, black & more with Next Day UK Delivery.
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")}
            style={{
              marginHorizontal: "auto",
              alignSelf: "center",
              paddingHorizontal: 20,
              paddingVertical: 10,
              backgroundColor: "#723af5",
              borderRadius: 20,
              marginTop: 20,
              flexDirection: "row",
              shadowColor: "#3ee",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.4,
              shadowRadius: 5,
              elevation: 5,
            }}
          >
            <MaterialIcons
              name="add-shopping-cart"
              size={30}
              color="white"
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{
                fontSize: 22,
                fontWeight: "500",
                marginTop: 5,
                color: "white",
              }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
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
  navbar: {
    flexDirection: "row",
    marginTop: Constants.statusBarHeight,
  },
});
