import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import LG from 'app/assets/img/lg.png'
import { styles } from './style'
import { ScrollView } from 'react-native-gesture-handler'

export function Login(props) {
    return (
        <ScrollView c>
        <ImageBackground style={styles.bgImg}>
            <Image source={LG}  style={styles.logo}/>
            
        </ImageBackground>

        </ScrollView>
    )
}