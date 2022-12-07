import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import LG from 'app/assets/img/lg.png'
import { styles } from './style'
import { ScrollView } from 'react-native-gesture-handler'
import { GButton, Input, KeepMe } from 'app/components'



export function Login(props) {
    const [userName, setUserName] = useState('')
    const [pass, setPass] = useState('')
    const [showHidePass, setShowHidePass] = useState(true)
    const [err, setErr] = useState('')
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('token', value)
        } catch (e) {
            console.log(e);
        }
    }

    const chekBoxData = async (value) => {
        try {
            await AsyncStorage.setItem('keep', JSON.stringify(toggleCheckBox))
        } catch (e) {
            console.log(e);
        }
    }

    let keep = async () => await chekBoxData()


    let handleSingIn = () => {
        keep()
        if (userName && pass.length > 7) {

        } if (!userName) {
            setErr('Please write correct email address')
        }
        else if (pass.length < 7) {
            setErr('Password must contain at least 8 characters')
        }
    }
    let handleChange = (e, name) => {
        name(e)
        setErr('')

    }


    return (
        <ImageBackground style={styles.bgImg} >
            <Image source={LG} style={styles.logo} />
            <View>
                <View></View>
            </View>
        </ImageBackground>
    )
}