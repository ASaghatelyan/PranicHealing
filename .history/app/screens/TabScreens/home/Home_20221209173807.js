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
      title: '"The way to overcome fear is simply to do what is right."',
      text: 'Master Choa Kok Sui, Compassionate Objectivity - The Golden Lotus Sutras on Character Building', 
    },
    {
      key: 's2',
      title: '“Regulate your mind. Do not worry excessively about the future. If you have done everything that has to be done, the future will take care of itself.”',
      text: 'Master Choa Kok Sui, Compassionate Objectivity - The Golden Lotus Sutras on Character Building',
    },
    {
      key: 's3',
      title: 'Great Offers',
      text: 'Enjoy Great offers on our all services',
    },
    {
      key: 's4',
      title: 'Best Deals',
      text: ' Best Deals on all our services',
    },
    {
      key: 's5',
      title: 'Bus Booking',
      text: 'Enjoy Travelling on Bus with flat 100% off',
    },
    {
      key: 's6',
      title: 'Train Booking',
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
        <Text style={styles.title}>
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