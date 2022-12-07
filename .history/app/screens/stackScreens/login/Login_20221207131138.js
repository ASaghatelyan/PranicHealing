import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import LG from 'app/assets/img/lg.png'
import { styles } from './style'
import { ScrollView } from 'react-native-gesture-handler'
import { Input, KeepMe } from 'app/components'



export function Login(props) {
    const [userName, setUser] = useState('')
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
        if (validateEmail(email) && pass.length > 7) {
            axios.post(`${url}auth/login`, {
                email,
                password: pass
            }).then(res => {
                dispatch({
                    type: "registration",
                    payload: res.data
                })
                storeData(res.data.tokens.access.token)
                return props.navigation.replace("DrawerNavigation")
            }).catch(err => {
                return setErr(err.response.data.message)
            })
        } if (!validateEmail(email)) {
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