import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import forgot from 'app/assets/img/forgot.png'
import { GButton, Input } from 'app/components'

export   function ForgotStepThree(props) {
  return (
    <ScrollView contentContainerStyle={styles.content}>
    <View style={styles.logoView}>
        <Image source={forgot} style={styles.forgotIc} />

    </View>
    <View>
        <View>
            <Text style={styles.text}>Please create new password</Text>
            
        </View>
        {/* <Input
            title='Code'
        /> */} 
    </View>
    <View style={styles.btnView}>
         
        
        <GButton
            btnName="Reset password" handelMove={() => props.navigation.navigate('Login')}
        />
    </View>
</ScrollView>
  )
}