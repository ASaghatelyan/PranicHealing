import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { styles } from './style'
import ic from 'app/assets/img/logout.png'

export function ProfileBtns(props) {
    return (
        <TouchableOpacity style={styles.content}>
            <View style={styles.iconView}>
                <Image source={ic} style={styles.ic}/>
                <Text>Log out</Text>
            </View>
            
        </TouchableOpacity>
    )
}