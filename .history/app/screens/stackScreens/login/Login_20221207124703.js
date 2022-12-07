import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import LG from 'app/assets/img/lg.png'
import { styles } from './style'
import { ScrollView } from 'react-native-gesture-handler'
import { Input } from 'app/components'
 
 

export function Login(props) {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}>
            <ImageBackground style={styles.bgImg}>
                <Image source={LG} style={styles.logo} />
            </ImageBackground>
            <View>
                <Text>Welcome!</Text>
                <Input
                title='Username'
                />
                <Input
                title='Password'
                secure={true}
                />
            </View>
        </ScrollView>
    )
}