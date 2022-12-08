import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Splash,
  Login,
  ForgotStepOne,
  ForgotStepOne
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
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotStepOne" component={ForgotStepOne} />
      <Stack.Screen name="ForgotStepOne" component={ForgotStepOne} />
      <Stack.Screen name="ForgotStepOne" component={ForgotStepOne} />

    </Stack.Navigator>
  )
}