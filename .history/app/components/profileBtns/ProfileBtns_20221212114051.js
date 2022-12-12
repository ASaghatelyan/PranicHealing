import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { styles } from './style'
import ic from 'app/assets/img/logout.png'
import right from 'app/assets/img/right.png'

export function ProfileBtns(props) {
    return (
        <TouchableOpacity style={styles.content}>
            <View style={styles.iconView}>
                <Image source={ic} style={styles.ic}/>
                <Text>Log out</Text>
            </View>
            <Image source={right} style={styles.right}/>
        </TouchableOpacity>
    )
}