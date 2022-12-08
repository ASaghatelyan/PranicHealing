import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import forgot from 'app/assets/img/forgot.png'
import { GButton } from 'app/components'



export function ForgotStepOne(props) {
  return (
    <View style={{
      flex: 1, 
      backgroundColor:'red',alignItems:'center'
    }}>
 
        <Image source={forgot} style={styles.forgotIc} />
 
     
        <GButton
          btnName="Ok" handelMove={() => {
          }} />
  
    </View>
  )
}