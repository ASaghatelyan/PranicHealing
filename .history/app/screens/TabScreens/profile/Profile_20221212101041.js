import { View, Text, ScrollView, StatusBar, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react';
import Owner from 'app/assets/img/owner.png'
import { styles } from './style'
import AppIntroSlider from 'react-native-app-intro-slider';
export   function Profile(props) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.content}>
        <StatusBar barStyle={'dark-content'} showHideTransition={false} />
        <Image source={Owner} style={styles.ownerImg} />
        <View style={styles.conteiner}>
          <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            onDone={onDone}
            // showSkipButton={true}
            onSkip={onSkip}
            nextLabel=''
            doneLabel=''
            activeDotStyle={{ backgroundColor: '#0088CF' }}
            dotStyle={{ borderColor: '#7D7D7D', borderWidth: 1 }} 
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}