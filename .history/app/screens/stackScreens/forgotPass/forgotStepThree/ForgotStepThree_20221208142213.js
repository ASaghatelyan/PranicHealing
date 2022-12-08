import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import forgot from 'app/assets/img/forgot.png'
import { GButton, Input } from 'app/components'

export function ForgotStepThree(props) {
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.logoView}>
        <Image source={forgot} style={styles.forgotIc} />

      </View>
      <View>

        <Text style={styles.text}>Please create new password</Text>


        <Input
          title='New Password'
          onChange={(e) => handleChange(e, setPass)}
          value={pass}
          inputBtn2={show}
          inputBtn1={hide}
         
          secure={true}
          handleShowPass={() => setShowHidePass(!showHidePass)}
        />
        <Input
          title='Confirm Password'
          onChange={(e) => handleChange(e, setConfirmPass)}
          value={confirmPass}
          inputBtn2={show}
          inputBtn1={hide}
         
          handleShowPass={() => setShowHidePass(!showHidePass)}
        />
      </View>
      <View style={styles.btnView}>


        <GButton
          btnName="Reset password" handelMove={() => props.navigation.navigate('Login')}
        />
      </View>
    </ScrollView>
  )
}