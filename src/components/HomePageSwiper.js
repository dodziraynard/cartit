import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useSelector } from "react-redux";
import Swiper from "react-native-swiper";

export default function HomePageSwiper() {
  const banners = useSelector((state) => state.banners.banners);

  return (
    <Swiper
      style={styles.wrapper}
      height={100}
      showsButtons={true}
      autoplay={true}
    >
      {banners.map((banner) => (
        <View
          key={banner.id}
          style={{ height: 180, borderRadius: 20, overflow: "hidden" }}
        >
          <Image
            source={{ uri: banner.image }}
            style={{
              width: wp("100%"),
              height: 180,
              resizeMode: "center",
            }}
          />
        </View>
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
