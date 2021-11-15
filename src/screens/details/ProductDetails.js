import { StatusBar } from "expo-status-bar";
import React from "react";
import ProductImagesSwiper from "../../components/ProductImagesSwiper";
import { MaterialIcons } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

export default function ProductDetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View
        style={{
          backgroundColor: "#33e3",
          height: 250,
          width: wp("100%"),
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          position: "absolute",
        }}
      />

      <View style={{ height: hp("85%"), marginTop: Constants.statusBarHeight, marginHorizontal:10 }}>
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
              <Text style={{ fontSize: 25, fontWeight: "500" }}>GHC 150</Text>

              <TouchableOpacity
                style={{
                  borderRadius: 4,
                  backgroundColor: "#eeef",
                  borderWidth: 1,
                  padding: 2,
                  height: 35,
                  width: 35,
                }}
              >
                <MaterialIcons
                  name="add-shopping-cart"
                  size={24}
                  color="black"
                  style={{ alignSelf: "center" }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{ fontSize: 25, color: "#666", fontWeight: "500" }}>
            Nike Air Max 20
          </Text>

          <Text style={{ fontSize: 20, fontWeight: "500", marginTop: 10 }}>
            Description
          </Text>

          <Text style={{}}>
            Step into the world of Nike Air Max at schuh. Shop women's, men's &
            kids Air Max in white, black & more with Next Day UK Delivery.
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeee",
  },
  navbar: {
    flexDirection: "row",
    marginTop: Constants.statusBarHeight,
  },
});
