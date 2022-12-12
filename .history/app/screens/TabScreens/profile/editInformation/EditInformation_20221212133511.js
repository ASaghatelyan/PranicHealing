import { View, Text } from 'react-native'
import React from 'react'

export function EditInformation(props) {
    return (
        <SafeAreaView style={styles.generalView}>
        <ScrollView contentContainerStyle={styles.content}>
          <StatusBar barStyle={'dark-content'} showHideTransition={false} />
       
            <ScreenTitle title='Profile' edit={edit} onEdit={()=>props.navigation.navigate('EditInformation')} />
            <View style={styles.userInfo}>
              <Image style={styles.userIc} source={user} />
              <View style={styles.userTextView}>
                <Text style={styles.nameText}>User Name</Text>
                <Image style={styles.qrIc} source={qrIcon} />
              </View>
            </View>
            
            <View style={styles.courseCountView}>
              <Text style={styles.bio}>BIO</Text>
              <Text style={styles.bioInfo}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and...
              </Text>
            </View>
          </LinearGradient >
           
          
        </ScrollView>
      </SafeAreaView>
    )
}