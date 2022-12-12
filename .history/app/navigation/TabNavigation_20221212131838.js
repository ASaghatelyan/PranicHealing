import React, { useState, useEffect } from "react";
import { Dimensions, Image, StyleSheet, Platform, TouchableOpacity, View, TouchableNativeFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "app/networking/api";
const Tab = createBottomTabNavigator();
let width = Dimensions.get("window").width;
import HomeNavigation from "./HomeNavigation";
import ProfileNavigation from "./ProfileNavigation";
import CertificateNavigation from "./CertificateNavigation";
import { GlobalHeight, GlobalWidth } from "app/constant/styleConst";

export default function TabNavigation(props) {
  const [add, setAdd] = useState(null)
  const [modalVisable, setModalVisable] = useState(false)



  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({

          headerShown: false,
          tabBarActiveTintColor: "#0088CF",
          header: {
            height: 55,
            flexDirection: 'row',
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            shadowOffset: {
                height: 1,
                width: 1
            }
        }
          tabBarStyle: {
            backgroundColor: "#343F46",
            borderWidth:1,
            borderColor: '#343F46',
            // borderRadius: 50,
            // marginBottom: 40,
            marginTop: 5,
            height: 88,
            // paddingHorizontal: 12,
            // paddingTop: 30,
            // marginHorizontal: 10,
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
            if (route.name === "CertificateNavigation") {
              imageSource = require("app/assets/img/Vector.png");
            }
            if (route.name === "ProfileNavigation") {
              imageSource = require("app/assets/img/Profile.png");
            }

            if (route.name === "GameNavigation") {
              return <View  >
                <Image />
              </View>;
            } else {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Image
                    style={[{
                      height: 25,
                      width: 25,
                      resizeMode: "contain",
                      tintColor: color,
                    }, route.name === "HomeNavigation" && { width: 28, height: 28 }]}
                    source={imageSource}
                  />
                  {focused ?
                    <View style={{
                      borderRadius: 50,
                      width: 5,
                      height: 5,
                      marginTop: 5,
                      backgroundColor: "#0088CF",
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
                // if (routeName === "HandicapNavigation") { return false }

                return true
              })(route),
            tabBarButton:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                // if (routeName === "HandicapNavigation") { () => null }

              })(route),
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              // if (routeName === "HandicapNavigation") { return { display: 'none' } }

              return styles.generalStyle
            })(route),
          })} />

        <Tab.Screen name="CertificateNavigation" component={CertificateNavigation}
          options={({ route }) => ({
            tabBarVisible:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                // if (routeName === "HandicapNavigation") { return false }

                return true
              })(route),
            tabBarButton:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                // if (routeName === "HandicapNavigation") { () => null }

              })(route),
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              // if (routeName === "HandicapNavigation") { return { display: 'none' } }

              return styles.generalStyle
            })(route),
          })} />

        <Tab.Screen name="ProfileNavigation" component={ProfileNavigation}
          options={({ route }) => ({
            tabBarVisible:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                // if (routeName === "HandicapNavigation") { return false }

                return true
              })(route),
            tabBarButton:
              ((route) => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                // if (routeName === "HandicapNavigation") { () => null }

              })(route),
            tabBarStyle: ((route) => {
              const routeName = getFocusedRouteNameFromRoute(route) ?? ""
              // if (routeName === "HandicapNavigation") { return { display: 'none' } }

              return styles.generalStyle
            })(route),
          })} />
      </Tab.Navigator>

    </>

  );
}



const styles = StyleSheet.create({
  content: {
    width: width,
    marginTop: 2,
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
    elevation: 75,
    paddingBottom: 24,
  },
  title_view: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title_text: {
    fontSize: GlobalWidth(20),
    fontFamily: "Poppins-SemiBold",
    color: '#fff'
  },
  close_img: {
    width: GlobalWidth(16),
    height: GlobalHeight(16),
    resizeMode: 'contain'
  },
  item_btn: {
    height: GlobalHeight(64),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255, 0.1)'
  },
  item_text: {
    fontWeight: '500',
    fontSize: GlobalWidth(14),
    fontFamily: "Poppins-Regular",
    color: '#fff'
  },
  right_img: {
    width: GlobalWidth(13),
    height: GlobalHeight(13),
    resizeMode: 'contain'
  },
  generalStyle: {
    backgroundColor: "#FFF",
    borderWidth: GlobalWidth(1),
    borderTopEndRadius: 40,
    borderTopLeftRadius: 40,
    borderColor: '#FFF',
    marginTop: GlobalHeight(5),
    paddingTop: Platform.OS === 'android' ? 0 : GlobalHeight(20),
    height: Platform.OS === 'android' ? GlobalHeight(86) : GlobalHeight(86),
    position: "absolute",
  }

});
