import {
    ScrollView,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Splash(props) { 
    const getData = async () => {
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

    const navi = async () => {
        let token = await getDataTokken()
        let timer = setTimeout(() => {
            token ? props.navigation.navigate('TabNavigation') : props.navigation.navigate('Login')
        }, 2000);
        return () => {
            clearTimeout(timer)
        }
    }


    useEffect(() => {
        // navi()
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.content}>
            {/* <StatusBar barStyle={'dark-content'} showHideTransition={false} /> */}
            {/* {Platform.OS === 'android' && StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
            {Platform.OS === 'android' && StatusBar.setTranslucent(true)} */}
            <Text s>Splash</Text>
            <Text>Splash</Text>
            <Text>Splash</Text>
        </ScrollView >
    )
}