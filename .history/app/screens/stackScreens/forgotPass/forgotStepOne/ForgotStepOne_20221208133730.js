import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import forgot from 'app/assets/img/forgot.png'
import { GButton } from 'app/components'



export function ForgotStepOne(props) {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor:'red'
    }}>
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'blue'
      }}>
        <Image source={forgot} style={styles.forgotIc} />
      </View>
     
        <GButton
          btnName="Ok" handelMove={() => {
          }} />
  
    </View>
  )
}