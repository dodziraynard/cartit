import { StatusBar } from "expo-status-bar";
import React from "react";
import Navbar from "../../components/Navbar";
import ProductsComponent from "../../components/ProductsComponent";
import { useSelector } from "react-redux";

import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function ProductsScreen({ navigation, route }) {
  const filteredProducts = useSelector(
    (state) => state.products.queryMatchedProducts
  );
  const query = route.params.query;
  const category = route.params.category;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Navbar navigation={navigation} />

      <View style={{ height: hp("85%") }}>
        <Text
          style={{
            fontSize: 20,
            margin: 20,
            color: "#fffa",
            fontWeight: "bold",
          }}
        >
          {category
            ? category.name
            : query
            ? "Results for '" + query + "'"
            : ""}
        </Text>

        <ProductsComponent
          horizontal={false}
          numColumns={2}
          catId={category ? category.id : -1}
          products={filteredProducts}
          navigation={navigation}
        />
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
