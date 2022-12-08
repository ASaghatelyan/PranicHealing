import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style'
import forgot from 'app/assets/img/forgot.png'
import { GButton, Input } from 'app/components'
import { TouchableOpacity } from 'react-native-gesture-handler'

export function ForgotStepTwo(props) {
    return (
        <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.logoView}>
                <Image source={forgot} style={styles.forgotIc} />

            </View>
            <View>
                <View>
                    <Text style={styles.text}>Please check your email</Text>
                    <Text style={styles.textInfo}>Check you email on this device to verify your account.</Text>
                </View>
                <Input
                    title='Code'
                />
                <Text style={styles.textEmail}>Please check: example@gmail.com</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnName}>Resend link</Text>
                </TouchableOpacity> 
                <GButton
                    btnName="Open My Email" handelMove={() => props.navigation.navigate('ForgotStepThree')} />
            </View>
            <View style={styles.btnView}>
              
              
            </View>
        </ScrollView>
    )
}