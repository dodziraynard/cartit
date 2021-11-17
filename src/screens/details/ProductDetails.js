import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { useDispatch } from "react-redux";
import { ADD_ITEM_TO_CART } from "../../redux/actions/types";

export default function ProductDetail({ navigation, route }) {
  const product = route.params.product;
  const color = route.params.color;
  const size = route.params.size;

  const dispatch = useDispatch();
  const [chosenColor, setChosenColor] = useState(color);
  const [chosenSize, setChosenSize] = useState(size);

  const addItemToCart = (product) => {
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: { product, quantity: 1, color: chosenColor, size: chosenSize },
    });
    navigation.goBack();
  };

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
          backgroundColor: "white",
          marginTop: Constants.statusBarHeight,
          marginHorizontal: 5,
          paddingHorizontal: 10,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
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
              <Text style={{ fontSize: 30, fontWeight: "500" }}>
                GHC {product.price}
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 30, color: "#000a", fontWeight: "500" }}>
            {product.name}
          </Text>

          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              marginTop: 20,
              color: "#333",
            }}
          >
            Take your pick!
          </Text>

          {/* Color options */}
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
              {product.colors.map((color) => (
                <TouchableOpacity
                  key={color}
                  onPress={() => setChosenColor(color)}
                  style={{
                    borderWidth: 3,
                    borderColor: chosenColor === color ? "#723af5" : "white",
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
              ))}
            </View>
          </ScrollView>

          {/* Size options */}

          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              marginTop: 10,
              color: "#333",
            }}
          >
            Select Size
          </Text>

          <ScrollView horizontal>
            <View
              style={{
                alignSelf: "center",
                height: 80,
                margin: 5,
                flexDirection: "row",
                marginVertical: 20,
              }}
            >
              {product.sizes.map((size) => (
                <TouchableOpacity
                  key={size}
                  onPress={() => setChosenSize(size)}
                  style={{
                    borderWidth: 1,
                    borderColor: "#ccc",
                    backgroundColor: chosenSize === size ? "#000d" : "white",
                    borderRadius: 15,
                    marginHorizontal: 10,
                    height: 80,
                    width: 80,
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 28,
                      padding: 20,
                      fontWeight: "500",
                      color: chosenSize === size ? "white" : "black",
                    }}
                  >
                    {size}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <Text
            style={{
              fontSize: 28,
              fontWeight: "500",
              marginTop: 10,
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
            {product.description}
          </Text>

          <TouchableOpacity
            onPress={() => addItemToCart(product)}
            style={{
              marginHorizontal: "auto",
              alignSelf: "center",
              paddingHorizontal: 20,
              paddingVertical: 15,
              backgroundColor: "#723af5",
              borderRadius: 20,
              marginTop: 20,
              flexDirection: "row",
              shadowColor: "#723af5",
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
