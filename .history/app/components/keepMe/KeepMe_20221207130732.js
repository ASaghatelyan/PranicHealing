import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import {st}

export   function KeepMe(props) {
  return (
    <View style={styles.content}>
    <View style={[styles.checkBoxConteiner, Platform.OS === "ios" ? { marginLeft: 0 } : { marginLeft: -6 }]}>
        <CheckBox
            value={props.check}
            disabled={false}
            onCheckColor='#D3FF56'
            onFillColor='#171717'
            onTintColor='#D3FF56'
            tintColors={{ true: '#D3FF56', false: '#C1C1C1' }}
            onValueChange={props.valueChanged}
            style={[{ margin: 0, padding: 0 },Platform.OS === "ios" ? { width:20,height:20 } : null]}
       
            boxType="square"
            onAnimationType='one-stroke'
        />
        <Text style={styles.checkBoxText}>Keep Me Logged In</Text>
    </View> 
</View>
  )
}