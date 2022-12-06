import {
    ScrollView,
    StatusBar,
    Text,
    Image,
    View
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Logo from 'app/assets/img/logo.png'

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
        <LinearGradient colors={['#D7FFFD', '#D8F2FF']} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
            <StatusBar barStyle={'dark-content'} showHideTransition={false} />
            {Platform.OS === 'android' && StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
            {Platform.OS === 'android' && StatusBar.setTranslucent(true)}
            <View >
                <Image source={Logo} style={styles.logo}/>
            </View>
        </LinearGradient>
    )
}