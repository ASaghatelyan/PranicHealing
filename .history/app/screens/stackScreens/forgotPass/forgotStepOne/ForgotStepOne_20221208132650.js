import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import forgot from 'app/assets/img/forgot.png'



export function ForgotStepOne(props) {
  return (
    <Scro>
      <Image source={forgot} style={styles.forgotIc}/>
    </Scro>
  )
}