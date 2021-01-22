import * as React from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SmallRoundButton from "../Components/SmallRoundButton";
import BigRoundButton from "../Components/BigRoundButton";
import rainbow from "../assets/rainbow.png";

//spr debugger na chacie
//ADAM : ZAMIEN WSYSTKIE SMALL ROUND NA KOPIE BIG ROUND BUTTON. SKOPIUJ JE Z np. dla testu rz czy z
// RZ.js - > wez Bigroundbutton stamtąd. Tylko zamień "sprawdz wiedze" na rz czy ż etc.
function ExamMainPage({navigation}) {
  return (
    <View style={styles.main}>
      <Text style={styles.title}>Sprawdź wiedzę!</Text>
      <View style={styles.container}>
        <BigRoundButton
          navigation={navigation}
          style={styles.button}
          lessonType="PickAnswer"
          lessonTitle="RZ czy Ż?"
          rules="Rz czy ż?"
          word="Rycerz"
          hiddenWord="Ryce_"
          badAns="ż"
          goodAns="rz"
        />
        <BigRoundButton
          navigation={navigation}
          style={styles.button}
          lessonType="PickAnswer"
          lessonTitle="SZ czy RZ?"
          rules="SZ czy RZ?"
          word="Krzak"
          hiddenWord="K_ak"
          badAns="SZ"
          goodAns="RZ"
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
        badAns = "om"
        goodAns = "ą"
      />
        <BigRoundButton
        navigation={navigation}
        style={styles.button}
        lessonType="PickAnswer"
        lessonTitle="Ę czy en/em?"
        rules ="Ę czy em"
        word= "Rozumiem"
        hiddenWord="Rozumi_"
        badAns = "ę"
        goodAns = "em"
      />
      </View>
      <View style={styles.container}>
        <BigRoundButton
          navigation={navigation}
          style={styles.button}
          lessonType="PickAnswer"
          lessonTitle="U czu Ó?"
          rules="U czu Ó?"
          word="Miód"
          hiddenWord="Mi_d"
          badAns="U"
          goodAns="Ó"
        />
        <BigRoundButton
          navigation={navigation}
          style={styles.button}
          lessonType="PickAnswer"
          lessonTitle="CH czy H?"
          rules="CH czy H?"
          word="Huśtawka"
          hiddenWord="_uśtawka"
          badAns="CH"
          goodAns="H"
        />
      </View>
      <Image source={rainbow}/>
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