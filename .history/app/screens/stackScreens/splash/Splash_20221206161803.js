import {
    ScrollView,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style' 
import AsyncStorage from '@react-native-async-storage/async-storage';

export   function Splash(props) {
    let getData = async () => {
        let data = await AsyncStorage.getItem('key', (err, value) => {
            if (err) {
                console.log(err)
            } else {
            }
        })
        return JSON.parse(data)
    }

    const getDataTokken = async () => {

        try {
            const value = await AsyncStorage.getItem('token')
            if (value !== null) {
                return value
            }
        } catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        navi()
    }, [])
  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}