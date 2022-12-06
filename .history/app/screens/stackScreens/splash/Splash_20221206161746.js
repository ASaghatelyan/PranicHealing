import {
    ScrollView,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import bg from '../../../assets/img/bg.png'
import logo from 'app/assets/img/splash.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

export   function Splash(props) {
  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}