import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from "../../../Colors";

//spr debugger na chacie

function Rules() {
  return (
    <View style={styles.main}>

      <Text
        style={styles.title}>RZ czy SZ?</Text>
      <Text
        style={styles.subtitle}>Kiedy piszemy RZ:</Text>
      <Text style={styles.text}>
        >Rz piszemy po spółgłoskach: b, p, d, t, g, k, ch, j, w{"\n"},{"\n"}
        {"\n"}
      </Text>

      <Text
        style={styles.subtitle}>Wyjątki z SZ:</Text>
      <Text style={styles.text}>
        >W wyrazach: bukszpan, kształt, pszczoła, pszenica, riksza{"\n"}
        >W przymimotnikach w stopniu wyższym i najwyższym: lepszy, większy, mniejszy {"\n"}
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