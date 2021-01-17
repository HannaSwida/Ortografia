import * as React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SmallRoundButton from "../Components/SmallRoundButton";

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
          style={styles.button}
          lessonTitle="SZ czy RZ?"/>
      </View>
      <View style={styles.container}>
        <SmallRoundButton
          navigation={navigation}
          style={styles.button}
          lessonTitle="ON, EN czy Ą, Ę?"/>
        <SmallRoundButton
          navigation={navigation}
          style={styles.button}
          lessonTitle="NI czy Ń?"/>
      </View>
      <View style={styles.container}>
        <SmallRoundButton
          navigation={navigation}
          style={styles.button}
          lessonTitle="CH czy H?"/>
        <SmallRoundButton
          navigation={navigation}
          style={styles.button}
          lessonTitle="CI czy Ć"/>
      </View>
      <View style={styles.container}>
        <SmallRoundButton
          navigation={navigation}
          style={styles.button}
          lessonTitle="SI czy Ś"/>
        <SmallRoundButton
          navigation={navigation}
          style={styles.button}
          lessonTitle="Inne"/>
      </View>
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