import { View, Text, ScrollView, StatusBar, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'; 
import { styles } from './style'
import { ScreenTitle } from 'app/components';
import edit from 'app/assets/img/edit.png'
import LinearGradient from 'react-native-linear-gradient';
import user from 'app/assets/img/user.png'

export function Profile(props) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.content}>
        <StatusBar barStyle={'dark-content'} showHideTransition={false} />
        <LinearGradient colors={['#D7FFFD', '#D8F2FF']} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}  >
          <ScreenTitle title='Profile' edit={edit} />
          <View >
            <Image style={styles.userIc} source={user}/>
            <View>
              <Text></Text>
              <Image/>
            </View>
          </View>
        </LinearGradient >
        <View style={styles.conteiner}>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}