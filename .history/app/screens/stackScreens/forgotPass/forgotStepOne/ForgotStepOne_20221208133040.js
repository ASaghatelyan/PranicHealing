import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import forgot from 'app/assets/img/forgot.png'
import { GButton } from 'app/components'



export function ForgotStepOne(props) {
  return (
    <View >
      <View>
        <Image source={forgot} style={styles.forgotIc} />
      </View>
      <View>
        <GButton
          btnName="Sing In" handelMove={() => {

          }} />
      </View>
    </View>
  )
}