import * as React from 'react';
import { Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {COLORS} from "../Colors";
import { useNavigation } from '@react-navigation/native';


function BigRoundButton(props) {
  return (
    <TouchableOpacity
        onPress={() =>  props.navigation.navigate(props.lessonType, {
            rules: props.rules,
            word: props.word,
            hiddenWord: props.hiddenWord,
            badAns: props.badAns,
            goodAns: props.goodAns,
          })
        }>
      <View style={styles.button}>
        <Text style={styles.text}>{props.lessonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height:100,
    width:100,
    padding:10,
    backgroundColor: COLORS.blue,
    borderRadius: 50,
    margin:20,
  },
  text:{
    textAlign: "center",
  },
});

export default BigRoundButton;