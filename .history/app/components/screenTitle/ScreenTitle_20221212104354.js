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
                <Image source={back} style={styles.backIc} />
            </TouchableOpacity> 
            <Text style={styles.titleText}>ScreenTitle</Text>
            <TouchableOpacity style={styles.editView}>
                <Image source={props.t} style={styles.edit} />
            </TouchableOpacity> 
        </View>
    )
}