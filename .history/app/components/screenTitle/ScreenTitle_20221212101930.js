import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import back 

export   function ScreenTitle(props) {
  return (
    <View style={styles.content}>
      <Text style={styles.titleText}>ScreenTitle</Text>
    </View>
  )
}