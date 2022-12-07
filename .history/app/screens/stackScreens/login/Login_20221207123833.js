import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import LG from 'app/assets/img/lg.png'

export function Login(props) {
    return (
        <ImageBackground style={{ flex: 1 }}>
            <Image source={LG} />
        </ImageBackground>
    )
}