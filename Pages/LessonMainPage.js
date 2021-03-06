import * as React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SmallRoundButton from "../Components/SmallRoundButton";
import stars from "../assets/stars.png";

//ADAM " rób wszystko wg RZ czy z
function LessonMainPage({navigation}) {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Wybierz lekcję!</Text>
      <View style={styles.container}>
        <SmallRoundButton
          navigation={navigation}
          onPress={() => navigation.navigate('RZ')}
          style={styles.button}
          lessonType="RZ"
          lessonTitle="RZ czy Ż?"/>
        <SmallRoundButton
          navigation={navigation}
          onPress={() => navigation.navigate('SZ')}
          style={styles.button}
          lessonType="SZ"
          lessonTitle="SZ czy RZ?"/>
      </View>
      <View style={styles.container}>
        <SmallRoundButton
          navigation={navigation}
          onPress={() => navigation.navigate('Nasal')}
          style={styles.button}
          lessonType="Nasal"
          style={styles.button}
          lessonTitle="Ą czy OM?"/>
        <SmallRoundButton
          navigation={navigation}
          onPress={() => navigation.navigate('Nasal_E')}
          style={styles.button}
          lessonType="Nasal_E"
          style={styles.button}
          lessonTitle="Ę czy EM?"/>
      </View>
      <View style={styles.container}>
        <SmallRoundButton
          navigation={navigation}
          onPress={() => navigation.navigate('U')}
          style={styles.button}
          lessonType="U"
          style={styles.button}
          lessonTitle="U czy Ó?"/>
        <SmallRoundButton
          navigation={navigation}
          onPress={() => navigation.navigate('CH')}
          style={styles.button}
          lessonType="CH"
          lessonTitle="CH czy H?"/>
      </View>
      <View style={styles.container}>
        <SmallRoundButton
          navigation={navigation}
          onPress={() => navigation.navigate('Soft')}
          style={styles.button}
          lessonType="Soft"
          style={styles.button}
          lessonTitle="Ń, Ś, Ź, Ć, Dź"/>
      </View>
      <Image source={stars} />

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    main: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    title: {
      textAlign: 'center',
      fontFamily: 'PartyLetPlain',
      fontSize: 40,
      marginVertical: 20,
    }
  }
);

export default LessonMainPage;