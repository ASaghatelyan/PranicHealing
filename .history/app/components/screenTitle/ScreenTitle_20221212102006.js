import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { styles } from './style'
import back from 'app/assets/img/back.png'
import left from 'app/assets/img/a'

export   function ScreenTitle(props) {
  return (
    <View style={styles.content}>
      <Text style={styles.titleText}>ScreenTitle</Text>
    </View>
  )
}