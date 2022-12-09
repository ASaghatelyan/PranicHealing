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
      title: '“Life is like an echo! when you give something, it comes back to you many, many times.”',
      text: 'Master Choa Kok Sui, Achieve the Impossible - The Golden Lotus Sutras on Spiritual Business Management',
    },
    {
      key: 's4',
      title: '“A word is like a finger pointing at different things. Do not look at the finger; focus on the essence of the word. Focus on what the finger is pointing at!”',
      text: 'Master Choa Kok Sui, Achieve the Impossible - The Golden Lotus Sutras on Spiritual Business Management',
    },
    {
      key: 's5',
      title: '“As you develop, the people around you also develop. As you progress, the world progresses with you to a certain degree.”',
      text: 'Master Choa Kok Sui, Creative Transformation - The Golden Lotus Sutras on Spiritual Practice',
    },
    {
      key: 's6',
      title: '“Spirituality is a way of life. it is not just doing meditation.',
      text: 'Master Choa Kok Sui, Creative Transformation - The Golden Lotus Sutras on Spiritual Practice',
    },
  ];

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1, 
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 110,
          height:322
        }}>
        <Text style={styles.title}>
          {item.title}
        </Text> 
        <Text style={styles.text}>
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