import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Rules from "./Rules";
import {COLORS} from "../../../Colors";
import SmallRoundButton from "../../../Components/SmallRoundButton";
import BigRoundButton from "../../../Components/BigRoundButton";

//ADAM: dla kazdego sz czy z etc kopiuj to we własnych folderach, to np jest w RZ. kazdy folder musi miec oddzielnie swoje
//rules

function Nasal({navigation}) {
  return (
    <View style={styles.container}>
      <Rules/>
      <BigRoundButton
        navigation={navigation}
        style={styles.button}
        lessonType="PickAnswer"
        lessonTitle="Sprawdź wiedzę!"
        rules ="Rz czy ż?"
        word= "Rycerz"
        hiddenWord="Ryce_"
        badAns = "ż"
        goodAns = "rz"
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      height: '140%',
      alignItems: 'flex-end',
      flexDirection: 'column',
      backgroundColor: '#e1f0ef',
    },
    button: {
      alignSelf: 'flex-end',
    },
    main: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    title: {
      textAlign: 'center',
      fontSize: 40,
      marginVertical: 20,
    }
  }
);

export default RZ;