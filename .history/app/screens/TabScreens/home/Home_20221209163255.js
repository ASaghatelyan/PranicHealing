import { View, Text, ScrollView, StatusBar } from 'react-native'
import React from 'react'

export function Home(props) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1,backgroundColor:'red' }}>
      <StatusBar barStyle={'dark-content'} showHideTransition={false} />
      <Text>Home</Text>
    </ScrollView>
  )
}