import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import forgot from 'app/assets/img/forgot.png'
import { GButton, Input } from 'app/components'



export function ForgotStepOne(props) {

  return (
    <ScrollView contentContainerStyle={{
      flex: 1,
      // justifyContent: 'space-between',
      paddingHorizontal: 16
    }}>
      <View style={styles.logoView}>
        <Image source={forgot} style={styles.forgotIc} />

      </View>
      <View>
        <Text style={styles.text}>For reset password please enter email address</Text>
        <Input
          title='Email'
        />
      </View>
      <View style={styles.btnView}>
        <GButton
          btnName="Ok" handelMove={() => props.navigation.navigate('ForgotStepTwo')} />
      </View>
    </ScrollView>
  )
}