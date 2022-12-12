import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigation from "./StackNavigation";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
import { Profile, } from "app/screens";


export default function ProfileNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Profile" component={Profile} />

        </Stack.Navigator>
    )
}