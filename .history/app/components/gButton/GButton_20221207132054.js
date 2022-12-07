
import React from 'react'
import { View, Button, StyleSheet, TouchableHighlight, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export   function GButton(props) {
  return (
    <TouchableHighlight  onPress={props.handelMove} >
    <LinearGradient colors={['#A2E664', '#D3FF56']} style={styles.linerGradient}>
        <Text style={styles.btnName}>
            {props.btnName}
        </Text>
    </LinearGradient>
</TouchableHighlight>
  )
}