import { View, Text, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

export function Home(props) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1,   paddingBottom: 90, paddingTop: 44 }}>
        <StatusBar barStyle={'dark-content'} showHideTransition={false} />
       
      </ScrollView>
    </SafeAreaView>
  )
}