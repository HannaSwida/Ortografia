import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../../../Colors";

//spr debugger na chacie

function Rules() {
  return (
    <View style={styles.main}>
      <Text
        style={styles.title}>RZ czy Ż?</Text>
      <Text
        style={styles.subtitle}>Kiedy piszemy U:</Text>
      <Text style={styles.text}>
        >W czasownikach kończących się na -uć: czuć, kłuć, snuć{"\n"}
        >R końcówkach: -un, -unek, -uszka, -uch, -us, -usia: opiekun, pakunek, poduszka, łańcuch, mamusia{"\n"}
        >W czasownikach liczby pojednyczej kończących się na -uję/-ujesz/-uje: kupuję, szanujesz, maluje
      </Text>
      <Text
        style={styles.subtitle}>Kiedy piszemy Ó:</Text>
      <Text style={styles.text}>
        >Gdy wymienia się na o, a, e: stół - stoły, skrót - skracać, siódmy - siedem{"\n"}
        >W końcówkach: -ów, -ówka, -ówna: krzyżówka, końcówka, Kraków{"\n"}
        >Wyjątek: skuwka, zasuwka, wsuwka{"\n"}
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