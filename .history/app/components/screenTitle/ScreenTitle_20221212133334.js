import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import back from 'app/assets/img/back.png'
import close from 'app/assets/img/close.png'
import edit from 'app/assets/img/edit.png'

export function ScreenTitle(props) {
    return (
        <View style={styles.content}>
            <TouchableOpacity style={styles.backView}>
                <Image source={props.icon} style={styles.backIc} />
            </TouchableOpacity>
            <Text style={styles.titleText}>{props.title}</Text>
            <TouchableOpacity style={styles.editView} on>
                <Image source={props.edit} style={styles.edit} />
            </TouchableOpacity>
        </View>
    )
}