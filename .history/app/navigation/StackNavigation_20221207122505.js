import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Splash,
  Login,
} from "app/screens";

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      {/* <Stack.Screen name="Splash" component={Splash} /> */}

    </Stack.Navigator>
  )
}