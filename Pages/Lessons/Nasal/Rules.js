import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../../../Colors";

//spr debugger na chacie

function Rules() {
  return (
    <View style={styles.main}>
      <Text
        style={styles.title}>Ą czy OM?</Text>
      <Text
        style={styles.subtitle}>Kiedy piszemy Ą:</Text>
      <Text style={styles.text}>
        >Na końcu rzeczowników rodzaju żeńskiego w narzędniku liczby pojedynczej: drogą, nogą, stacją{"\n"}
        >Na końcu czasowników trzeciej osoby liczby mnogiej: idą, robią, piszą{"\n"}
        >W czasownikach w czasie przeszłym przed literą "ł": wziąłem, odpocząłem{"\n"}
      </Text>
      <Text
        style={styles.subtitle}>Kiedy piszemy OM:</Text>
      <Text style={styles.text}>
        >Na końcu rzeczowników w celowniku liczby mnogiej: widokom, drogom, nogom, książkom{"\n"}
        >W wyrazach obcych: komputer, tombola

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