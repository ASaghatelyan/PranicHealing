import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import LG from 'app/assets/img/lg.png'
import { styles } from './style'
import { ScrollView } from 'react-native-gesture-handler'
import { Input, KeepMe } from 'app/components'



export function Login(props) {
    const [email, setEmail] = useState('')
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

    return (
        <ScrollView contentContainerStyle={styles.content}>
            <ImageBackground style={styles.bgImg} >
                <Image source={LG} style={styles.logo} />
            </ImageBackground>
            <View style={styles.bottomView}>
                <Text style={styles.welcome}>Welcome!</Text>
                <Input
                    title='Username'
                />
                <Input
                    title='Password'
                    secure={true}
                />
                <View style={styles.forgot}>
                    <TouchableOpacity>
                        <Text style={styles.forgotText}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
                <KeepMe />
            </View>
        </ScrollView>
    )
}