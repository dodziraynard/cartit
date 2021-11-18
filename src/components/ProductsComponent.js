import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { heightPercentageToDP } from "react-native-responsive-screen";

export default ProductsComponent = ({
  title,
  navigation,
  catId,
  numColumns,
  products,
  horizontal = true,
}) => {
  if (catId > 0)
    products = useSelector((state) =>
      state.products.products.filter((product) => product.cat_id == catId)
    );

  const renderItem = ({ item: product }) => (
    <Item title={product.name} product={product} navigation={navigation} />
  );

  return (
    <View>
      <Text style={styles.sectionHeader}>{title}</Text>

      <FlatList
        height={numColumns == 2 ? heightPercentageToDP("70%") : null}
        horizontal={horizontal}
        numColumns={horizontal ? 0 : numColumns}
        centerContent={"center"}
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
        source={{ uri: product.image }}
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
      <Text>{product.info}</Text>
    </TouchableOpacity>

    <View
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        marginVertical: 5,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>
        GHC {product.price}
      </Text>
      <View
        style={{
          borderRadius: 4,
          padding: 2,
          height: 35,
          flexDirection: "row",
          alignItems: "center",
          width: 35,
        }}
      >
        <AntDesign
          name="eye"
          size={14}
          color="black"
          style={{ alignSelf: "center" }}
        />
        <Text>{product.views}</Text>
      </View>
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
