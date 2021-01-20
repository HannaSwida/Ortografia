import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import AnswerButton from "../../Components/AnswerButton";
import BadAnswerButton from "../../Components/BadAnswerButton";
import BigRoundButton from "../../Components/BigRoundButton";
import {COLORS} from "../../Colors";
import SmallRoundButton from "../../Components/SmallRoundButton";
import TextInput from "react-native-web/dist/exports/TextInput";

function InputAnswer({navigation, route}) {
  const [correct, setCorrect] = useState(true);
  const {rules, badAns, goodAns, word, hiddenWord} = route.params;
  const [value, onChangeText] = React.useState('Useless Placeholder');


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{rules}</Text>
      <Text style={styles.subtitle}>Wybierz poprawną odpowiedź!</Text>
      <Text style={styles.word}>{hiddenWord}</Text>
    <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
      {correct && <View style={styles.correct}>
        <Text style={styles.correctAns}>Brawo, to dobra odpowiedź!</Text>
        <SmallRoundButton lessonTitle={"Wróć do lekcji"} rules={'x'} lessonType={"Lesson"}/>
      </View>}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      height:'1000%',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#e1f0ef',
    },
    notClicked: {
      display: "none",
    },
    correct: {
      display: "flex",
      alignItems: "center",
      color: "green",
    },
    title: {
      textAlign: 'center',
      fontFamily: 'PartyLetPlain',
      marginTop:15,
      fontSize: 40,
      color: COLORS.purple,
    },
    subtitle: {
      fontSize: 25,
      margin: 20,
      fontWeight: "500",
      textAlign: 'center',
      color: COLORS.blue,
    },
    word: {
      fontSize: 30,
      margin: 20,
      fontWeight: "500",
      textAlign: 'center',
    },
    correctAns: {
      fontSize: 40,
      margin: 20,
      fontWeight: "500",
      textAlign: 'center',
      fontFamily: 'PartyLetPlain',
      color:'green'
    },
  buttons:{
      flexDirection: 'row',
  }
  }
);

export default InputAnswer;