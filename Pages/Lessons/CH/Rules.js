import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../../../Colors";

//spr debugger na chacie

function Rules() {
  return (
    <View style={styles.main}>
      <Text
        style={styles.title}>CH czy H?</Text>
      <Text
        style={styles.subtitle}>Kiedy piszemy CH:</Text>
      <Text style={styles.text}>
        >W wyrazach wymienia się na "sz",{"\n"}
        >Na końcu wyrazu: dach, pech (wyjątek: druh!){"\n"}
        >Ch piszemy po s: schab, schody, schron{"\n"}
      </Text>
      <Text
        style={styles.subtitle}>Kiedy piszemy H:</Text>
      <Text style={styles.text}>
        >H piszemy, gdy wymienia się na ż, z albo g - wahać/waga, błahy/błazen, druhna/drużba{"\n"}
        >H jest często spotykane w wyrazach obcego pochodzenia, zwłaszcza tych, które zaczynają się od cząstek: hipo-, higro-, hiper-, hydro-{"\n"}
        książka - księga,{"\n"}
        wstążka - wstęga,{"\n"}
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