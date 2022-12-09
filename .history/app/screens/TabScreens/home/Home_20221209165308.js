import { View, Text, ScrollView, StatusBar, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Owner from 'app/assets/img/owner.png'
import { styles } from './style'
import PagerView from 'react-native-pager-view';


export function Home(props) {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 90, paddingTop: 44 }}>
        <StatusBar barStyle={'dark-content'} showHideTransition={false} />
        {/* <Image source={Owner} style={{ width: '100%', height: 381 }} /> */} 
        <PagerView style={styles.pagerView} initialPage={1}>
          <View key="1">
            <Text>First page asdasd</Text>
          </View>
          <View key="2">
            <Text>Second page</Text>
          </View>
        </PagerView>
      </ScrollView>
    </SafeAreaView>
  )
}