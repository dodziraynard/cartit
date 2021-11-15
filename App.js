import React from "react";
import HomeScreen from "./src/screens/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/auth/Login";
import RegisterScreen from "./src/screens/auth/Register";
import IntroductionScreen from "./src/screens/auth/Introduction";
import ProductDetailsScreen from "./src/screens/details/ProductDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          cardOverlayEnabled: true,
          gestureEnabled: true,
          gestureResponseDistance: { horizontal: 20 },
        }}
      >
        <Stack.Screen
          name="IntroductionScreen"
          options={{
            headerShown: false,
          }}
          component={IntroductionScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: "Login",
          }}
        />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{
            title: "Product Details",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: "Register",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
