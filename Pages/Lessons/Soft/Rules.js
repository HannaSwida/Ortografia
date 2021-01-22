import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../../../Colors";

//spr debugger na chacie

function Rules() {
  return (
    <View style={styles.main}>
      <Text
        style={styles.title}>Spółgłoski nosowe</Text>
      <Text
        style={styles.subtitle}>Kiedy piszemy Ń, Ś, Ć, Ź, Dź:</Text>
      <Text style={styles.text}>
        >Na końcu wyrazów w mianowniku: dzień, ktoś, gąłąź{"\n"}
        >Przed spółgłoskami, np. śnieg, źródło, ćma, źle{"\n"}
      </Text>
      <Text
        style={styles.subtitle}>Kiedy piszemy ni, si, ci, zi, dzi:</Text>
      <Text style={styles.text}>
        >Przed samogłoskami, np. siano, ciastko, dziura, niebo{"\n"}
        >Kiedy głoska tworzy sylabę, np. siła, dziwny, zima, niski{"\n"}
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