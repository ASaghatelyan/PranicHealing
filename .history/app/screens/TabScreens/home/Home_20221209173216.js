import { View, Text, ScrollView, StatusBar, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react';
import Owner from 'app/assets/img/owner.png'
import { styles } from './style'
import AppIntroSlider from 'react-native-app-intro-slider';

export function Home(props) {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };
  const slides = [
    {
      key: 's1',
      text: 'The way to overcome fear is simply to do what is right."', origin: 'Master Choa Kok Sui, Compassionate Objectivity - The Golden Lotus Sutras on Character Building', 
    },
    {
      key: 's2',
      text: 'Upto 25% off on Domestic Flights',
    },
    {
      key: 's3',
      text: 'Enjoy Great offers on our all services',
    },
    {
      key: 's4',
      text: ' Best Deals on all our services',
    },
    {
      key: 's5',
      text: 'Enjoy Travelling on Bus with flat 100% off',
    },
    {
      key: 's6',
      text: ' 10% off on first Train booking',
    },
  ];

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 100,
        }}>
        <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Image
          style={styles.introImageStyle}
          source={item.image} />
        <Text style={styles.introTextStyle}>
          {item.text}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 90, paddingTop: 44 }}>
        <StatusBar barStyle={'dark-content'} showHideTransition={false} />
        <Image source={Owner} style={{ width: '100%', height: 381, marginBottom: 18 }} />
        <View style={styles.conteiner}>
          <Text style={styles.title}> "The way to overcome fear is simply to do what is right."</Text>
          <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            onDone={onDone}
            // showSkipButton={true}
            onSkip={onSkip}
            nextLabel=''
            doneLabel=''
            activeDotStyle={{ backgroundColor: '#0088CF' }}
            dotStyle={{ borderColor: '#7D7D7D', borderWidth: 1 }}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}