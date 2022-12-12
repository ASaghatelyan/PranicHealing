import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import { styles } from './style';

export function KeepMe(props) {
    return (
        <View style={styles.content}>
            <View style={[styles.checkBoxConteiner, Platform.OS === "ios" ? { marginLeft: 0 } : { marginLeft: -6 }]}>
                <CheckBox
                    value={props.check}
                    disabled={false}
                    onCheckColor='#FFF'
                    onFillColor='#0088CF'
                    onTintColor='#0088CF'
                    tintColors={{ true: 'red', false: '#0088CF' }}
                    onValueChange={props.valueChanged}
                    style={[{ margin: 0, padding: 0 }, Platform.OS === "ios" ? { width: 20, height: 20 } : null]}

                    boxType="square"
                    onAnimationType='one-stroke'
                />
                <Text style={styles.checkBoxText}>{props.title}</Text>
            </View>
        </View>
    )
}