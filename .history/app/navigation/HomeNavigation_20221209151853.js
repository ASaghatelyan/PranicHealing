import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigation from "./StackNavigation";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <View>
      <Text>HomeNavigation</Text>
    </View>
  )
}