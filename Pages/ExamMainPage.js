import * as React from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SmallRoundButton from "../Components/SmallRoundButton";
import BigRoundButton from "../Components/BigRoundButton";

//spr debugger na chacie
//ADAM : ZAMIEN WSYSTKIE SMALL ROUND NA KOPIE BIG ROUND BUTTON. SKOPIUJ JE Z np. dla testu rz czy z
// RZ.js - > wez Bigroundbutton stamtąd. Tylko zamień "sprawdz wiedze" na rz czy ż etc.
function ExamMainPage({navigation}) {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Wybierz test!</Text>
      <View style={styles.container}>
         <BigRoundButton
        navigation={navigation}
        style={styles.button}
        lessonType="PickAnswer"
        lessonTitle="Rz czy ż?"
        rules ="Rz czy ż?"
        word= "Rycerz"
        hiddenWord="Ryce_"
        badAns = "ż"
        goodAns = "rz"
      />
                <BigRoundButton
        navigation={navigation}
        style={styles.button}
        lessonType="PickAnswer"
        lessonTitle="Sz czy rz?"
        rules ="Rz czy ż?"
        word= "Rycerz"
        hiddenWord="Ryce_"
        badAns = "ż"
        goodAns = "rz"
      />
      </View>
      <View style={styles.container}>
      <BigRoundButton
        navigation={navigation}
        style={styles.button}
        lessonType="PickAnswer"
        lessonTitle="Ą czy om?"
        rules ="Ą czy om"
        word= "Przyglądam się książkom"
        hiddenWord="Przyglądam się książk_"
        badAns = "ą"
        goodAns = "om"
      />
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

export default ExamMainPage;