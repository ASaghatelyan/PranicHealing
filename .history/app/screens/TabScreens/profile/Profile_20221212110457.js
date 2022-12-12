import { View, Text, ScrollView, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { styles } from './style'
import { ScreenTitle } from 'app/components';
import edit from 'app/assets/img/edit.png'
import LinearGradient from 'react-native-linear-gradient';
import user from 'app/assets/img/user.png'
import qrIcon from 'app/assets/img/qr.png'
import fb from 'app/assets/img/fb.png'
import tw from 'app/assets/img/tw.png'
import ln from 'app/assets/img/ln.png'


export function Profile(props) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.content}>
        <StatusBar barStyle={'dark-content'} showHideTransition={false} />
        <LinearGradient colors={['#D7FFFD', '#D8F2FF']} style={styles.linearGradient} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}  >
          <ScreenTitle title='Profile' edit={edit} />
          <View style={styles.userInfo}>
            <Image style={styles.userIc} source={user} />
            <View style={styles.userTextView}>
              <Text style={styles.nameText}>User Name</Text>
              <Image style={styles.qrIc} source={qrIcon} />
            </View>
          </View>
          <View>
            <TouchableOpacity style={styles.courseBtn}>
              <Text>6 Completed courses</Text>
            </TouchableOpacity>
            <View style={styles.socialView}>
              <TouchableOpacity>
                <Image style={styles.socialIc} source={fb} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.socialIc} source={tw} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.socialIc} source={ln} />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient >
        <View style={styles.conteiner}>


        </View>
      </ScrollView>
    </SafeAreaView>
  )
}