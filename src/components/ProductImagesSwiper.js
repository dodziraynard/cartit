import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

import Swiper from "react-native-swiper";

export default function ProductImagesSwiper({ navigation, images }) {
  return (
    <Swiper style={styles.wrapper} height={100} showsButtons={false}>
      {images.map((image) => (
        <TouchableOpacity
          style={{ height: 250, overflow: "hidden", borderRadius: 20 }}
          onPress={() => console.log("presseds")}
        >
          <Image
            source={{ uri: image }}
            style={{
              width: wp("100%"),
              height: 250,
              resizeMode: "center",
            }}
          />
        </TouchableOpacity>
      ))}
    </Swiper>
  );
}

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
