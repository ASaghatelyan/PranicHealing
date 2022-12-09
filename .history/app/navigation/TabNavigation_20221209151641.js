import React, { useState, useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, TouchableNativeFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 
 
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
 import axiosInstance from "app/networking/api";
const Tab = createBottomTabNavigator();
let width = Dimensions.get("window").width;





export default function TabNavigation(props) {
  const [add, setAdd] = useState(null)
  const [modalVisable, setModalVisable] = useState(false)

 

  return (
    <>
    <Tab.Navigator
                screenOptions={({ route }) => ({

                    headerShown: false,
                    tabBarActiveTintColor: "#CCE63E",
                    tabBarStyle: {
                        backgroundColor: "#343F46",
                        borderTopColor: '#343F46',
                        borderRadius: 50,
                        marginBottom: 40,
                        marginTop: 5,
                        height: 68,
                        paddingHorizontal: 12,
                        paddingTop: 30,
                        marginHorizontal: 10,
                        position: "absolute",
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,
                        elevation: 4,
                    },
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused, color, size }) => {
                        let imageSource = null;
                        if (route.name === "HomeNavigation") {
                            imageSource = require("app/assets/img/Home.png");
                        }
                        if (route.name === "ListNavigation") {
                            imageSource = require("../assets/img/list.png");
                        }
                        if (route.name === "GameNavigation") {
                            imageSource = require("../assets/img/golf.png");
                        }
                        if (route.name === "KubokNavigation") {
                            imageSource = require("../assets/img/kubok.png");
                        }
                        if (route.name === "DateNavigation") {
                            imageSource = require("../assets/img/date.png");
                        }
                        if (route.name === "GameNavigation") {
                            return <View style={{
                                backgroundColor: "#BADD2D",
                                borderRadius: 50,
                                width: 48,
                                height: 48,
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                <Image
                                    style={{
                                        height: 30,
                                        width: 30,
                                        resizeMode: "contain",
                                    }}
                                    source={imageSource}
                                />
                            </View>;
                        } else {
                            return (
                                <View style={{ alignItems: "center", justifyContent: "center" }}>
                                    <Image
                                        style={{
                                            height: 24,
                                            width: 24,
                                            resizeMode: "contain",
                                            tintColor: color,
                                        }}
                                        source={imageSource}
                                    />
                                    {focused ?
                                        <View style={{
                                            borderRadius: 50,
                                            width: 5,
                                            height: 5,
                                            marginTop: 5,
                                            backgroundColor: "#CCE63E",
                                        }} />
                                        :
                                        <View style={{
                                            width: 5,
                                            height: 5,
                                            marginTop: 5,
                                        }} />
                                    }
                                </View>
                            );
                        }
                    },
                    tabBarLabel: ({ focused, color, size }) => {

                    },
                })}
            >
                <Tab.Screen name="HomeNavigation" component={HomeNavigation}
                    options={({ route }) => ({
                        tabBarVisible:
                            ((route) => {
                                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                                if (routeName === "HandicapNavigation") { return false }
                                else if (routeName === "AllNotification") { return false }
                                else if (routeName === "ProfileInfo") { return false }
                                else if (routeName === "InviteInfo") { return false }
                                else if (routeName === "WaitingList") { return false }
                                else if (routeName === "InfoDateItems") { return false }
                                else if (routeName === "MyFollowes") { return false }
                                else if (routeName === "SearchPeopleScreen") { return false }
                                return true
                            })(route),
                        tabBarButton:
                            ((route) => {
                                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                                if (routeName === "HandicapNavigation") { () => null }
                                else if (routeName === "AllNotification") { () => null }
                                else if (routeName === "ProfileInfo") { () => null }
                                else if (routeName === "InviteInfo") { () => null }
                                else if (routeName === "WaitingList") { () => null }
                                else if (routeName === "InfoDateItems") { () => null }
                                else if (routeName === "MyFollowes") { () => null }
                                else if (routeName === "SearchPeopleScreen") { () => null }
                            })(route),
                        tabBarStyle: ((route) => {
                            const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                            if (routeName === "HandicapNavigation") { return { display: 'none' } }
                            else if (routeName === "AllNotification") { return { display: 'none' } }
                            else if (routeName === "ProfileInfo") { return { display: 'none' } }
                            else if (routeName === "InviteInfo") { return { display: 'none' } }
                            else if (routeName === "WaitingList") { return { display: 'none' } }
                            else if (routeName === "InfoDateItems") { return { display: 'none' } }
                            else if (routeName === "MyFollowes") { return { display: 'none' } }
                            else if (routeName === "SearchPeopleScreen") { return { display: 'none' } }
                            return styles.generalStyle
                        })(route),
                    })} />
                <Tab.Screen name="ListNavigation" component={ListNavigation}
                    options={({ route }) => ({
                        tabBarVisible:
                            ((route) => {
                                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                                if (routeName === "PostDetiles") { return false }
                                else if (routeName === "PostRoundDetiles") { return false }
                                else if (routeName === "PostLikes") { return false }
                                else if (routeName === "SearchScreen") { return false }
                                else if (routeName === "MyRounds") { return false } return true
                            })(route),
                        tabBarButton:
                            ((route) => {
                                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                                if (routeName === "PostDetiles") { () => null }
                                else if (routeName === "PostRoundDetiles") { () => null }
                                else if (routeName === "PostLikes") { () => null }
                                else if (routeName === "SearchScreen") { () => null }
                                else if (routeName === "MyRounds") { () => null }
                            })(route),
                        tabBarStyle: ((route) => {
                            const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                            if (routeName === "PostDetiles") { return { display: 'none' } }
                            else if (routeName === "PostRoundDetiles") { return { display: 'none' } }
                            else if (routeName === "PostLikes") { return { display: 'none' } }
                            else if (routeName === "SearchScreen") { return { display: 'none' } }
                            else if (routeName === "MyRounds") { return { display: 'none' } } return styles.generalStyle
                        })(route),

                    })}
                />
                <Tab.Screen name="GameNavigation" component={GameNavigation}
                    options={{
                        tabBarStyle: { display: "none" },
                    }}
                    listeners={({ navigation }) => ({
                        tabPress: (e) => {
                            e.preventDefault();
                            setStartPlayModalVisible(true)
                        },
                    })}
                />
                <Tab.Screen name="KubokNavigation" component={KubokNavigation}
                    options={({ route }) => ({
                        tabBarVisible:
                            ((route) => {
                                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                                if (routeName === "JoinToLeague") { return false }
                                else if (routeName === "InvitedToLeague") { return false } return true
                            })(route),
                        tabBarButton:
                            ((route) => {
                                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                                if (routeName === "JoinToLeague") { () => null }
                                else if (routeName === "InvitedToLeague") { () => null }
                            })(route),
                        tabBarStyle: ((route) => {
                            const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                            if (routeName === "JoinToLeague") { return { display: 'none' } }
                            else if (routeName === "InvitedToLeague") { return { display: 'none' } } return styles.generalStyle
                        })(route),

                    })}
                />
                <Tab.Screen name="DateNavigation" component={DateNavigation}
                    options={({ route }) => ({

                        tabBarVisible:
                            ((route) => {
                                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                                if (routeName === "InfoDateItems") { return false }
                                else if (routeName === "InfoCompletedItem") { return false }
                                else if (routeName === "MamageInvites") { return false }
                                else if (routeName === "InviteGroupe") { return false }
                                else if (routeName === "InviteLater") { return false }
                                else if (routeName === "EditUpcomingData") { return false }
                                else if (routeName === "InvitePeople") { return false }
                                else if (routeName === "InviteFriends") { return false }
                                else if (routeName === "HandicapNavigation") { return false }
                                else if (routeName === "AllNotification") { return false }
                                return true
                            })(route),
                        tabBarButton:
                            ((route) => {
                                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                                if (routeName === "InfoDateItems") { () => null }
                                else if (routeName === "InfoCompletedItem") { () => null }
                                else if (routeName === "InviteLater") { () => null }
                                else if (routeName === "MamageInvites") { () => null }
                                else if (routeName === "InviteGroupe") { () => null }
                                else if (routeName === "EditUpcomingData") { () => null }
                                else if (routeName === "InvitePeople") { () => null }
                                else if (routeName === "InviteFriends") { () => null }
                                else if (routeName === "HandicapNavigation") { () => null }
                                else if (routeName === "AllNotification") { () => null }
                            })(route),
                        tabBarStyle: ((route) => {
                            const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                            if (routeName === "InfoDateItems") { return { display: 'none' } }
                            else if (routeName === "InfoCompletedItem") { return { display: 'none' } }
                            else if (routeName === "InviteGroupe") { return { display: 'none' } }
                            else if (routeName === "InviteLater") { return { display: 'none' } }
                            else if (routeName === "MamageInvites") { return { display: 'none' } }
                            else if (routeName === "EditUpcomingData") { return { display: 'none' } }
                            else if (routeName === "InvitePeople") { return { display: 'none' } }
                            else if (routeName === "InviteFriends") { return { display: 'none' } }
                            else if (routeName === "HandicapNavigation") { return { display: 'none' } }
                            else if (routeName === "AllNotification") { return { display: 'none' } }
                            return styles.generalStyle
                        })(route),

                    })}
                />
                <Tab.Screen
                    options={{
                        tabBarStyle: { display: 'none' },
                        tabBarButton: () => null,
                        tabBarVisible: false,
                    }}

                    name="ManageNavigation" component={ManageNavigation} />
            </Tab.Navigator>
       
    </>

  );
}



const styles = StyleSheet.create({
  content: {
    width: width,
    marginTop: 22,
    paddingHorizontal: 24,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingBottom: 24,
  },
  title_view: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title_text: {
    fontWeight: '600',
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    color: '#fff'
  },
  close_img: {
    width: 16,
    height: 16,
    resizeMode: 'contain'
  },
  item_btn: {
    height: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255, 0.1)'
  },
  item_text: {
    fontWeight: '500',
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: '#fff'
  },
  right_img: {
    width: 13,
    height: 13,
    resizeMode: 'contain'
  },
  generalStyle: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
    borderColor: '#C4C0BF',
    marginTop: 5, paddingTop: 25,
    height: 57,
    position: "absolute",
  }

});
