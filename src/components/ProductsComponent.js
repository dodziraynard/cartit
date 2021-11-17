import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default ProductsComponent = ({ title, navigation, catId }) => {
  const products = useSelector((state) =>
    state.products.products.filter((product) => product.cat_id == catId)
  );

  const renderItem = ({ item: product }) => (
    <Item title={product.name} product={product} navigation={navigation} />
  );

  return (
    <View>
      <Text style={styles.sectionHeader}>{title}</Text>

      <FlatList
        horizontal
        data={products}
        onPress={() => navigation.navigate("LoginScreen")}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const Item = ({ title, navigation, product }) => (
  <View
    style={{
      backgroundColor: "white",
      margin: 5,
      borderRadius: 20,
      paddingHorizontal: 10,
    }}
  >
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetailsScreen", { product: product })
      }
    >
      <Image
        source={require("../../assets/generics/intropage.png")}
        style={{
          width: 150,
          height: 150,
          backgroundColor: "#eeee",
          margin: 5,
          borderRadius: 20,
          resizeMode: "center",
        }}
      />
    </TouchableOpacity>

    <Text
      style={{
        fontSize: 20,
        marginBottom: 10,
        color: "#666",
        fontWeight: "bold",
      }}
    >
      {title}
    </Text>

    <TouchableOpacity
      style={{
        backgroundColor: "#eeee",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: 80,
      }}
    >
      <Text style={{}}>7 Colors</Text>
    </TouchableOpacity>

    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 5,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>GHC 349</Text>
      <TouchableOpacity
        style={{
          borderRadius: 4,
          borderColor: "#eeee",
          borderWidth: 2,
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
);

const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#000",
    marginTop: 20,
    marginBottom: 5,
    marginLeft: 10,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "rgba(255, 255, 255, 0.5)",
    marginTop: 5,
  },
});
