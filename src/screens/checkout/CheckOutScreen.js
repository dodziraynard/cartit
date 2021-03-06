import { StatusBar } from "expo-status-bar";
import React from "react";
import { CreditCardInput } from "react-native-credit-card-input";
import { RESET_CART } from "../../redux/actions/types";
import Input from "../../components/Input";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useDispatch } from "react-redux";

export default function CheckOutScreen({ navigation }) {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View
        style={{
          height: hp("85%"),
          marginTop: 5,
          marginHorizontal: 10,
        }}
      >
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "500",
              color: "#333",
            }}
          >
            Update your details to checkout.
          </Text>

          <View
            style={{
              alignSelf: "center",
              paddingTop: 20,
              paddingBottom: 50,
            }}
          >
            <Input label="Full Name" placeholder="Raynard Dodzi Helegah" />
            <Input label="Address" placeholder="Dr Hilla Limann, UG" />
            <Input label="Phone" placeholder="024 9485 948" />
            <Input label="Email" placeholder="yourname@domain.com" />

            <Text style={{ fontSize: 20, color: "grey", marginVertical: 20 }}>
              Please enter your credit card details.
            </Text>
            <CreditCardInput onChange={(form) => console.log(form)} />
          </View>
        </ScrollView>

        <View
          style={{
            marginTop: 5,
            flexDirection: "row",
            marginHorizontal: 10,
            justifyContent: "space-around",
            alignItems: "center",
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#723af5",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: "white",
              }}
            >
              Total
            </Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                color: "white",
              }}
            >
              5 items
            </Text>
          </View>

          <Text
            style={{
              fontSize: 30,
              fontWeight: "600",
              color: "white",
            }}
          >
            GHC 9849
          </Text>
          <TouchableOpacity
            onPress={() => {
              dispatch({
                type: RESET_CART,
                payload: null,
              });
              navigation.reset({ routes: [{ name: "OrderReceived" }] });
            }}
            style={{ backgroundColor: "orange", padding: 10, borderRadius: 10 }}
          >
            <Text>Check Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});
