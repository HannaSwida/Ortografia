import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../../../Colors";

//spr debugger na chacie

function Rules() {
  return (
    <View style={styles.main}>
      <Text
        style={styles.title}>Ę czy EM?</Text>
      <Text
        style={styles.subtitle}>Kiedy piszemy Ę:</Text>
      <Text style={styles.text}>
        >Na końcu rzeczowników rodzaju żeńskiego w bierniku liczby pojedynczej: drogę, nogę, stację{"\n"}
        >Na końcu czasowników pierwszej osoby liczby mnogiej: idę, robię, piszę{"\n"}
        >W czasownikach w czasie przeszłym przed literą "ł": wziąłem, odpocząłem{"\n"}
      </Text>
      <Text
        style={styles.subtitle}>Kiedy piszemy EM albo EN:</Text>
      <Text style={styles.text}>
        >Na końcu czasowników: umiem, jem, wiem, powiem, śmiem{"\n"}
        >W wyrazach obcych: elektroencefalograf

      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    text: {
      marginTop:10,
      color: COLORS.purple,
      fontSize: 20,
    },
    main: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      margin: 20,
    },
    title: {
      textAlign: 'center',
      fontFamily: 'PartyLetPlain',
      marginTop:5,
      fontSize: 40,
      color: COLORS.purple,
    },
    subtitle: {
      fontSize: 25,
      margin: 20,
      fontWeight: "500",
      textAlign: 'left',
      fontFamily: 'Bodoni 72',
      alignSelf: 'flex-start',
      color: COLORS.blue,
    }
  }
);

export default Rules;