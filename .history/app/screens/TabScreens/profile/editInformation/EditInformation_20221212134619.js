import { View, Text, ScrollView, StatusBar, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState } from 'react';
import { styles } from './style'
import { ProfileBtns, ScreenTitle } from 'app/components';
import LinearGradient from 'react-native-linear-gradient';
import back from 'app/assets/img/back.png'
import user from 'app/assets/img/user.png'

import edit from 'app/assets/img/edit.png'
import right from 'app/assets/img/right.png'
import course from 'app/assets/img/course.png'
import profile from 'app/assets/img/bprofile.png'
import pass from 'app/assets/img/chpass.png'



export function EditInformation(props) {
    return (
        <SafeAreaView style={styles.generalView}>
            <ScrollView contentContainerStyle={styles.content}>
                <StatusBar barStyle={'dark-content'} showHideTransition={false} />
                <ScreenTitle title='Edit information' icon={back} onBack={() => props.navigation.goBack()} />
                <TouchableOpacity style={styles.userInfo}>
                    <ImageBackground style={styles.userIc} source={user} >
                        <Image source={edit} style={styles.edit} />
                    </ImageBackground>
                </TouchableOpacity>
                <View style={styles.courseCountView}>
                    <Text style={styles.bio}>BIO</Text>
                    <Text style={styles.bioInfo}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...
                    </Text>
                </View>



            </ScrollView>
        </SafeAreaView>
    )
}