import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style'
import passIc from 'app/assets/img/pass.png'
import { GButton, Input } from 'app/components'

export function ForgotStepThree(props) {
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [err, setErr] = useState('')
  let handleChange = (e, name) => {
    name(e)
    setErr('')

  }
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.logoView}>
        <Image source={passIc} style={styles.forgotIc} />

      </View>
      <View>ß
        <Text style={styles.text}>Please create new password</Text>
        <Input
          title='New Password'
          onChange={(e) => handleChange(e, setPass)}
          value={pass}

          secure={true}
          handleShowPass={() => setShowHidePass(!showHidePass)}
        />
        <Input
          title='Confirm Password'
          onChange={(e) => handleChange(e, setConfirmPass)}
          value={confirmPass}
          secure={true}

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