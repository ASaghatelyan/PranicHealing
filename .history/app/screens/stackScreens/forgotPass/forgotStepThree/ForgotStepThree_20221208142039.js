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
          title='Password'
          onChange={(e) => handleChange(e, setPass)}
          value={pass}
          inputBtn2={show}
          inputBtn1={hide}
          showPass={styles.showPass}
          inputBtnView={Platform.OS === "ios" ? styles.showPassBtnIOS : styles.showPassBtnAndroid}
          inputBtn={showHidePass ? hide : show}
          secure={showHidePass}
          handleShowPass={() => setShowHidePass(!showHidePass)}
        />
        <Input
          title='Password'
          onChange={(e) => handleChange(e, setPass)}
          value={pass}
          inputBtn2={show}
          inputBtn1={hide}
          showPass={styles.showPass}
          inputBtnView={Platform.OS === "ios" ? styles.showPassBtnIOS : styles.showPassBtnAndroid}
          inputBtn={showHidePass ? hide : show}
          secure={showHidePass}
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