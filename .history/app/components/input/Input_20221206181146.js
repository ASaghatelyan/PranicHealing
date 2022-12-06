import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'

export default function Input(props) {
    const [color, setColor] = useState(false)
    return (
        <View style={{ width: "100%" }}>
            <TextInput
                style={[styles.styleInput, props.style,color && {backgroundColor:'red'}]}
                placeholder={props.placeholder}
                placeholderTextColor="#3A3434"
                onChangeText={props.onChange}
                secureTextEntry={props.secure}
                passwordRules={props.pass}
                value={props.value}
                id={props.id}
                type={props.type}
                multiline={props.multiline}
                numberOfLines={props.numberOfLines}
                onBlur={props.onBlur}
                keyboardType={props.keyType}
                editable={props.editable}
                maxLength={props.lengthNumber}
                onFocus={() => {
                    setColor()
                }}
            />
            <TouchableOpacity style={props.inputBtnView} onPress={props.handleShowPass}>
                <Image style={props.inputBtnIcon} source={props.inputBtn} />
            </TouchableOpacity>
        </View>
    )
}