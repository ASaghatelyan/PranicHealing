import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import forgot from 'app/assets/img/forgot.png'
import { GButton } from 'app/components'



export function ForgotStepOne(props) {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'space-between',
      paddingHorizontal: 16
    }}>
      <View>
      <View>
        <Image source={forgot} style={styles.forgotIc} />
        
      </View>
      <Text>For reset password please enter email address</Text>
      </View>
     
      <View style={{
        flex: 1,
        justifyContent: 'center',
      }}>
        <GButton
          btnName="Ok" handelMove={() => {
          }} />
      </View>
    </View>
  )
}