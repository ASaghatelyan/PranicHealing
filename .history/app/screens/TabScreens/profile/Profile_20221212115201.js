import { View, Text, ScrollView, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { styles } from './style'
import { ProfileBtns, ScreenTitle } from 'app/components';
import LinearGradient from 'react-native-linear-gradient';
import edit from 'app/assets/img/edit.png'
import user from 'app/assets/img/user.png'
import qrIcon from 'app/assets/img/qr.png'
import fb from 'app/assets/img/fb.png'
import tw from 'app/assets/img/tw.png'
import ln from 'app/assets/img/ln.png'
import logout from 'app/assets/img/logout.png'
import right from 'app/assets/img/right.png'
import course from 'app/assets/img/course.png'
import profile from 'app/assets/img/bprofile.png'
import pass from 'app/assets/img/bprofile.png'

export function Profile(props) {
  return (
    <SafeAreaView style={{ backgroundColor: '#FFF', height: '100%' }}>
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
          <View style={styles.courseCountView}>
            <TouchableOpacity style={styles.courseBtn}>
              <Text style={styles.courseBtnText}>6 Completed courses</Text>
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
          <View style={styles.courseCountView}>
            <Text style={styles.bio}>BIO</Text>
            <Text style={styles.bioInfo}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...
            </Text>
          </View>
        </LinearGradient >
        <View style={styles.conteiner}>
          <ProfileBtns
            name='My Completed courses'
            right={right}
            ic={course}
          />
          <ProfileBtns
            name='Profile settings'
            ic={profile}
            right={right} />
          <ProfileBtns
            name='Change password'
            right={right} />
          <ProfileBtns
            name="Log out"
            ic={logout} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}