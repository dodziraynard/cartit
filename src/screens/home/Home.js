import { StatusBar } from "expo-status-bar";
import React from "react";
import CartComponent from "../../components/CartComponent";
import HomePageSwiper from "../../components/HomePageSwiper";
import ProductCategoryComponent from "../../components/ProductCategoryComponent";
import ProductsComponent from "../../components/ProductsComponent";
import { useSelector, useDispatch } from "react-redux";

import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View
        style={{
          backgroundColor: "#723af5",
          height: 200,
          width: wp("100%"),
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          position: "absolute",
        }}
      />

      <View style={styles.navbar}>
        <TextInput
          style={{
            flex: 1,
            margin: 10,
            padding: 15,
            backgroundColor: "#eeef",
            borderRadius: 20,
            fontSize: 20,
          }}
          placeholderTextColor="#333"
          placeholder="I want to cart ..."
        />
        <CartComponent navigation={navigation} />
        <TouchableOpacity
          onPress={() => navigation.navigate("IntroductionScreen")}
          style={{
            alignSelf: "center",
            marginRight: 10,
            padding: 10,
            borderRadius: 20,
            backgroundColor: "#eeee",
          }}
        >
          <AntDesign name="user" size={24} color="black" />
        </TouchableOpacity>
      </View>

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

          <View style={{ height: 100 }}>
            <ScrollView horizontal={true}>
              {categories.map((cat) => (
                <ProductCategoryComponent
                  title={cat.name}
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
