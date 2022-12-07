import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LG from 'app/assets/img/lg.png'
import { styles } from './style'
import { ScrollView } from 'react-native-gesture-handler'
import { Input, KeepMe } from 'app/components'



export function Login(props) {
    return (
        <ScrollView contentContainerStyle={styles.content}>
            <ImageBackground style={styles.bgImg} >
                <Image source={LG} style={styles.logo} />
            </ImageBackground>
            <View style={styles.bottomView}>
                <Text style={styles.welcome}>Welcome!</Text>
                <Input
                    title='Username'
                />
                <Input
                    title='Password'
                    secure={true}
                />
                <View style={styles.forgot}>
                    <TouchableOpacity>
                        <Text style={styles.forgotText}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )
}