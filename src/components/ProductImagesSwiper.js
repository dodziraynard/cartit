import React, { Component } from "react";
import { AppRegistry, StyleSheet, View, Image } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
    borderRadius: 20,
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
    borderRadius: 20,
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    borderRadius: 20,
  },
});

export default class ProductImagesSwiper extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} height={100} showsButtons={false}>
        <View style={{ height: 100 }}>
          <Image
            source={require("../../assets/generics/intropage.png")}
            style={{
              width: wp("100%"),
              height: 250,
              resizeMode: "center",
            }}
          />
        </View>
        <View style={{ height: 100 }}>
          <Image
            source={require("../../assets/generics/intropage.png")}
            style={{
              width: wp("100%"),
              height: 250,
              resizeMode: "center",
            }}
          />
        </View>
        <View style={{ height: 100 }}>
          <Image
            source={require("../../assets/generics/intropage.png")}
            style={{
              width: wp("100%"),
              height: 250,
              resizeMode: "center",
            }}
          />
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => ProductImagesSwiper);
