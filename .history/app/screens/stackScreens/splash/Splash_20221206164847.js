import {
    ScrollView,
    StatusBar,
    Text,
    Image,
    View,
    Animated, SafeAreaView, Easing
} from 'react-native'
import React, { useState, useEffect } from 'react'
import { styles } from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import Logo from 'app/assets/img/logo.png'

export function Splash(props) {
    const [load, setLoad] = useState(false)

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

    let animatedValue = new Animated.Value(0);
    let currentValue = 0;


    animatedValue.addListener(({ value }) => {
        currentValue = value;
    });


    const flipAnimation = () => {
        if (currentValue >= 90) {
            Animated.spring(animatedValue, {
                toValue: 0,
                tension: 10,
                friction: 8,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.spring(animatedValue, {
                toValue: 180,
                tension: 10,
                friction: 8,
                useNativeDriver: false,
            }).start();
        }
    };

    const setInterpolate = animatedValue.interpolate({
        inputRange: [0, 180],
        outputRange: ['180deg', '360deg'],
    });

    const rotateYAnimatedStyle = {
        transform: [{ rotateY: setInterpolate }],
    };


    let timer = setInterval(() => {
        flipAnimation()
    }, 500);

    useEffect(() => {
        return clearInterval(timer)
    }, [])

    return (
        <LinearGradient colors={['#D7FFFD', '#D8F2FF']} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
            <StatusBar barStyle={'dark-content'} showHideTransition={false} />
            {Platform.OS === 'android' && StatusBar.setBackgroundColor("rgba(0,0,0,0)")}
            {Platform.OS === 'android' && StatusBar.setTranslucent(true)}
            <View >
                {/* <Image source={Logo} style={styles.logo}/> */}
                <Animated.Image
                    style={[styles.logo, rotateYAnimatedStyle]}
                    source={Logo} />
            </View>
        </LinearGradient>
    )
}