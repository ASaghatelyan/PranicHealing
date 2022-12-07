import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'

export function Input(props) {
    const [color, setColor] = useState(false)
    return (
        <View style={{ width: "100%" ,marginBottom:8}}>
            <Text style={styles.title}>{props.title}</Text>
            <TextInput
                style={[styles.styleInput, props.style, color && styles.selectedInput,]}
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
                onBlur={() => setColor(false)}
                keyboardType={props.keyType}
                editable={props.editable}
                maxLength={props.lengthNumber}
                onFocus={() => {
                    setColor(true)
                }}
            />
            <TouchableOpacity style={props.inputBtnView} onPress={props.handleShowPass}>
                <Image style={[props.inputBtnIcon]} source={props.inputBtn} />
            </TouchableOpacity>
        </View>
    )
}