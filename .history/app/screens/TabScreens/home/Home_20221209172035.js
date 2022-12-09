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
      key: "The way to overcome fear is simply to do what is right.",
      text: 'Best Recharge offers',
      title: 'Mobile Recharge',
     
    },
    {
      key:"The way to overcome fear is simply to do what is right.",
      title: 'Flight Booking',
      text: 'Upto 25% off on Domestic Flights',
      image: {
        uri:
          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
      },
      backgroundColor: '#febe29',
    },
    {
      key: "The way to overcome fear is simply to do what is right.",
      title: 'Great Offers',
      text: 'Enjoy Great offers on our all services',
      image: {
        uri:
          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
      },
      backgroundColor: '#22bcb5',
    },
    {
      key: 's4',
      title: 'Best Deals',
      text: ' Best Deals on all our services',
    
      backgroundColor: '#3395ff',
    },
    {
      key: 's5',
      title: 'Bus Booking',
      text: 'Enjoy Travelling on Bus with flat 100% off',
      
      backgroundColor: '#f6437b',
    },
    {
      key: 's6',
      title: 'Train Booking',
      text: ' 10% off on first Train booking',
      
      backgroundColor: '#febe29',
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
        <Image source={Owner} style={{ width: '100%', height: 381 }} />
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          // showSkipButton={true}
          onSkip={onSkip}
          nextLabel=''
          doneLabel=''
          activeDotStyle={{backgroundColor: '#0088CF'}}
          dotStyle={{borderColor:'#7D7D7D',borderWidth:1,}}
        />

      </ScrollView>
    </SafeAreaView>
  )
}