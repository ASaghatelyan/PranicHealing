import { View, Text, ScrollView, StatusBar, SafeAreaView, Image, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import React, { useState } from 'react';
import { styles } from './style'
import { ProfileBtns, ScreenTitle } from 'app/components';
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
                <View>
                    <Text>Facebook link</Text>
                    <TextInput placeholder='///link.facebookxxxxx'
                    onChangeText={(text)=>setFbLink(text)}
                    />
                </View>
                <View>
                    <Text>Facebook link</Text>
                    <TextInput placeholder='///link.facebookxxxxx'
                    onChangeText={(test)=>setLnLink()}
                    />
                </View>
                <View>
                    <Text>Facebook link</Text>
                    <TextInput placeholder='///link.facebookxxxxx'
                    onChangeText={()=>}
                    />
                </View>


            </ScrollView>
        </SafeAreaView>
    )
}