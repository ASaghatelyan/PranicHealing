import { View, Text, ScrollView, StatusBar, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Owner from 'app/assets/img/owner.png'
export function Home(props) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 90, paddingTop: 44 }}>
        <StatusBar barStyle={'dark-content'} showHideTransition={false} />
        <Image source={Owner} style={{ width: 426, height: 381 }} />
      </ScrollView>
    </SafeAreaView>
  )
}