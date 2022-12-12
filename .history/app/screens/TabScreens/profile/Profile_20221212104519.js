import { View, Text, ScrollView, StatusBar, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'; 
import { styles } from './style'
import { ScreenTitle } from 'app/components';
import edit from 'app/assets/img/edit.png'


export function Profile(props) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.content}>
        <StatusBar barStyle={'dark-content'} showHideTransition={false} />
        <Li >
          <ScreenTitle title='Profile' edit={edit} />
        </Li>
        <View style={styles.conteiner}>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}