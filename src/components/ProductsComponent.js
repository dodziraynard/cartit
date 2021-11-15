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

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title, navigation }) => (
  <View
    style={{
      backgroundColor: "white",
      margin: 5,
      borderRadius: 20,
      paddingHorizontal: 10,
    }}
  >
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetailsScreen")}
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

export default ProductsComponent = ({ title, navigation }) => {
  const renderItem = ({ item }) => (
    <Item title={item.title} navigation={navigation} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>{title}</Text>

      <FlatList
        horizontal
        data={DATA}
        onPress={() => navigation.navigate("LoginScreen")}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#121212",
  },
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
