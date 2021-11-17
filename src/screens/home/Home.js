import { StatusBar } from "expo-status-bar";
import React from "react";
import Navbar from "../../components/Navbar";
import HomePageSwiper from "../../components/HomePageSwiper";
import ProductCategoryComponent from "../../components/ProductCategoryComponent";
import ProductsComponent from "../../components/ProductsComponent";
import { useSelector } from "react-redux";

import { StyleSheet, View, ScrollView } from "react-native";
import Constants from "expo-constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function HomeScreen({ navigation }) {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Navbar navigation={navigation} />

      <View style={{ height: hp("85%") }}>
        <ScrollView>
          <View
            style={{
              alignSelf: "center",
              height: 180,
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
            <HomePageSwiper />
          </View>

          <View style={{ height: 100, alignSelf: "center" }}>
            <ScrollView horizontal={true}>
              {categories.map((category) => (
                <ProductCategoryComponent
                  category={category}
                  navigation={navigation}
                />
              ))}
            </ScrollView>
          </View>

          {categories.map((cat) => (
            <ProductsComponent
              title={cat.name}
              catId={cat.id}
              navigation={navigation}
            />
          ))}
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
