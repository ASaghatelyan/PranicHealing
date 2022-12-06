import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import 
import ForgotPassNavigation from "./ForgotPassNavigation";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      
    </Stack.Navigator>
  )
}