import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import LG from 'app/assets/img/lg.png'
import { styles } from './style'

export function Login(props) {
    return (
        <Sct
        <ImageBackground style={styles.bgImg}>
            <Image source={LG}  style={styles.logo}/>
            
        </ImageBackground>
    )
}