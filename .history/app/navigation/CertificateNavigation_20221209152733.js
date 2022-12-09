import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigation from "./StackNavigation";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
import { Home } from "app/screens";

export default function CertificateNavigation() {
  return (
    <View>
      <Text>CertificateNavigation</Text>
    </View>
  )
}