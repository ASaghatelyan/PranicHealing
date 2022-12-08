import { View, Text, Image ,StyleSheet} from 'react-native'
import React from 'react'
import { styles } from './style'
import forgot from 'app/assets/img/forgot.png'



export function ForgotStepOne(props) {
  return (
    <StyleSheet>
      <Image source={forgot} style={styles.forgotIc}/>
    </StyleSheet>
  )
}