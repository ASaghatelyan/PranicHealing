import React, { useState, useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View, TouchableNativeFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosInstance from "app/networking/api";
const Tab = createBottomTabNavigator();
let width = Dimensions.get("window").width;
import HomeNavigation from "./HomeNavigation";
import ProfileNavigation from "./ProfileNavigation";



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
            if (route.name === "ProfileNavigation") {
              imageSource = require("app/assets/img/Vector.png");
            }
            if (route.name === "GameNavigation") {
              imageSource = require("app/assets/img/Profile.png");
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
