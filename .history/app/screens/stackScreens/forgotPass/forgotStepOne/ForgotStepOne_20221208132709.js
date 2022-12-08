import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import forgot from 'app/assets/img/forgot.png'



export function ForgotStepOne(props) {
  return (
    <ScrollView >
      <Image source={forgot} style={styles.forgotIc}/>
    </ScrollView>
  )
}