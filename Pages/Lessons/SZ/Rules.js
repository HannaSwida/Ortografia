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
        style={styles.subtitle}>Kiedy piszemy RZ:</Text>
      <Text style={styles.text}>
        >W wyrazach wymienia się na "r",{"\n"}
        >Rz piszemy w zakończeniach wyrazów: -arz, -erz (mierz mistrz){"\n"}
        >Rz piszemy po spółgłoskach: b, p, d, t, g, k, ch, j, w{"\n"}
      </Text>
      <Text
        style={styles.subtitle}>Kiedy piszemy Ż:</Text>
      <Text style={styles.text}>
        >Ż piszemy po literach: l, ł, r, n,,{"\n"}
        >Ż piszemy, gdy wymienia się w innych formach tego samego wyrazu lub w innych wyrazach na: g, dz, h, z, ź, s,
        np.:{"\n"}
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