import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Rules from "./Rules";
import BigRoundButton from "../../../Components/BigRoundButton";



function RZ({navigation}) {
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