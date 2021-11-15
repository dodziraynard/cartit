import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const Input = ({ label, placeholder, value, widthHalf, secureTextEntry }) => {
  console.log(secureTextEntry);
  return (
    <View
      style={{
        height: wp("20%"),
        marginBottom: 8,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontWeight: "500",
          color: "gray",
        }}
      >
        {label}
      </Text>

      <TouchableOpacity
        style={[
          {
            flex: 1,
            paddingBottom: 5,
            justifyContent: "flex-end",
          },
          label == undefined
            ? {
                justifyContent: "flex-end",
              }
            : null,
        ]}
      >
        <TextInput
          secureTextEntry={secureTextEntry != null ? secureTextEntry : false}
          style={[
            {
              fontSize: 18,
              fontWeight: "500",
              paddingVertical: 20,
              paddingLeft: 20,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
              backgroundColor: "#eee",
              width: wp("90%"),
            },
            widthHalf
              ? {
                  width: wp("90%"),
                }
              : null,
          ]}
          value={value}
          placeholder={placeholder}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Input;
