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
