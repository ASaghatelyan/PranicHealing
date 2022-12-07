import { View, Text, ImageBackground, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react'
import LG from 'app/assets/img/lg.png'
import { styles } from './style'
import { ScrollView } from 'react-native-gesture-handler'
import { GButton, Input, KeepMe } from 'app/components'
import LinearGradient from 'react-native-linear-gradient'
import LoginBg from 'app/assets/img/login.png'


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
        // <ImageBackground style={styles.bgImg} source={LoginBg}>
        //     <ScrollView style={styles.content}>
        //         <View style={{ position: 'relative' }}>
        //             <LinearGradient colors={['#83C661', 'rgba(181, 255, 255, 0.5)']} style={styles.linearGradient} start={{ x: 0, y: 0.6 }} end={{ x: 0.9, y: 0.4 }} >
        //                 <View style={styles.bottomView}>
        //                     <Text style={styles.welcome}>Welcome!</Text>
        //                     <Input
        //                         title='Username'
        //                     />
        //                     <Input
        //                         title='Password'
        //                         secure={true}
        //                     />
        //                     <View style={styles.forgot}>
        //                         <TouchableOpacity>
        //                             <Text style={styles.forgotText}>Forgot password?</Text>
        //                         </TouchableOpacity>
        //                     </View>
        //                     <KeepMe check={toggleCheckBox} valueChanged={(newValue) => { setToggleCheckBox(newValue) }} title='Remember me' />
        //                     {err ? <Text style={styles.err}>{err}</Text> : <Text style={styles.err}></Text>}
        //                     <GButton btnName="Sing In" />
        //                 </View>
        //             </LinearGradient>
        //         </View>
        //     </ScrollView>
        // </ImageBackground>

        <View style={{ flex: 1, }}>
            <View style={styles.container}>
                <Image
                    source={LoginBg}
                    style={styles.image}
                />
            </View>
            <SafeAreaView
                style={{ flex: 1 }}>
                <StatusBar
                    // backgroundColor={'#11161f'}
                    animated={true}
                    // backgroundColor="transparent"
                    barStyle='dark-content'
                    translucent={true}
                />
                <ScrollView contentContainerStyle={styles.content}
                    showsVerticalScrollIndicator={false}
                    bounces={false}
                >
  //         <View style={{ position: 'relative' }}>
        //             <LinearGradient colors={['#83C661', 'rgba(181, 255, 255, 0.5)']} style={styles.linearGradient} start={{ x: 0, y: 0.6 }} end={{ x: 0.9, y: 0.4 }} >
        //                 <View style={styles.bottomView}>
        //                     <Text style={styles.welcome}>Welcome!</Text>
        //                     <Input
        //                         title='Username'
        //                     />
        //                     <Input
        //                         title='Password'
        //                         secure={true}
        //                     />
        //                     <View style={styles.forgot}>
        //                         <TouchableOpacity>
        //                             <Text style={styles.forgotText}>Forgot password?</Text>
        //                         </TouchableOpacity>
        //                     </View>
        //                     <KeepMe check={toggleCheckBox} valueChanged={(newValue) => { setToggleCheckBox(newValue) }} title='Remember me' />
        //                     {err ? <Text style={styles.err}>{err}</Text> : <Text style={styles.err}></Text>}
        //                     <GButton btnName="Sing In" />
        //                 </View>
        //             </LinearGradient>
                </ScrollView>
            </SafeAreaView>

        </View>
    )
}