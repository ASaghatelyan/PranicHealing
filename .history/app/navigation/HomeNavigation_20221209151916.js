import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StackNavigation from "./StackNavigation";
import TabNavigation from "./TabNavigation";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();


export default function HomeNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="HandicapNavigation" component={HandicapNavigation} />
            <Stack.Screen name="AllNotification" component={AllNotification} />
            <Stack.Screen name="ProfileInfo" component={ProfileInfo} />
            <Stack.Screen name="InviteInfo" component={InviteInfo} />
            <Stack.Screen name="WaitingList" component={WaitingList} />
            <Stack.Screen name="InfoDateItems" component={InfoDateItems} />
            <Stack.Screen name="MyFollowes" component={MyFollowes} />
            <Stack.Screen name="SearchPeopleScreen" component={SearchPeopleScreen} />
            <Stack.Screen name="EditProfileHandi" component={EditProfileHandi} />
        </Stack.Navigator>
    )
}