
import React from 'react'
import { View, Button, StyleSheet, TouchableHighlight, Text } from 'react-native'
 
export function GButton(props) {
    return (
        <TouchableHighlight onPress={props.handelMove} >
            <Text style={styles.btnName}>
                {props.btnName}
            </Text>
        </TouchableHighlight>
    )
}