import React from "react";
import HomeScreen from "./src/screens/home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/auth/Login";
import RegisterScreen from "./src/screens/auth/Register";
import IntroductionScreen from "./src/screens/auth/Introduction";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ cardOverlayEnabled: true }}
      >
        <Stack.Screen
          name="IntroductionScreen"
          headerShown={false}
          options={{
            title: "New Here?",
            headerShown: false,
            headerStyle: { backgroundColor: "transparent" },
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
