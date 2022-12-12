import { View, Text, ScrollView, StatusBar, SafeAreaView, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react';
import { styles } from './style'
import { GButton, ProfileBtns, ScreenTitle } from 'app/components';
import LinearGradient from 'react-native-linear-gradient';
import back from 'app/assets/img/back.png'
import user from 'app/assets/img/user.png'
import edit from 'app/assets/img/edit.png'




export function EditInformation(props) {
    const [text, setText] = useState('')
    const [fdLink, setFbLink] = useState('')
    const [lnLink, setLnLink] = useState('')
    const [twLink, setTwLink] = useState('')

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
                <View style={styles.bottomView}>
                    <View style={styles.courseCountView}>
                        <Text style={styles.bio}>BIO</Text>
                        <TextInput placeholder='About you'
                            multiline={true}
                            numberOfLines={5}
                            style={styles.bioInfo}
                            onChangeText={(text) => setText(text)}
                            maxLength={100}
                        />
                        <View style={styles.counter}>
                            <Text style={styles.text}>{text.length}</Text>
                            <Text style={styles.text}> / 100</Text>
                        </View>
                    </View>
                    <View style={styles.socialView}>
                        <Text style={styles.titleText}>Facebook link</Text>
                        <TextInput placeholder='///link.facebookxxxxx'
                            style={styles.input}
                            onChangeText={(text) => setFbLink(text)}
                        />
                    </View>
                    <View>
                        <Text style={styles.titleText}>Linkedin link</Text>
                        <TextInput placeholder='///link.linkedinxxxxx'
                            style={styles.input}
                            onChangeText={(test) => setLnLink(text)}
                        />
                    </View>
                    <View>
                        <Text style={styles.titleText}>Twitter link</Text>
                        <TextInput placeholder='///link.twitterxxxxx'
                            style={styles.input}
                            onChangeText={(text) => setTwLink(text)}
                        />
                    </View>
                <GButton
                    btnName="Save"
                />
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnName}>Cancel</Text>
                </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}