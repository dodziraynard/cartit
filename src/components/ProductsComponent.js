import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

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

const Item = ({ title }) => (
  <View
    style={{
      backgroundColor: "white",
      margin: 5,
      borderRadius: 20,
      paddingHorizontal: 10,
    }}
  >
    <TouchableOpacity>
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

    <Text style={{ fontSize: 20, color: "#555", fontWeight: "400" }}>
      {title}
    </Text>

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

export default ProductsComponent = ({ title }) => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>{title}</Text>

      <FlatList
        horizontal
        data={DATA}
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
