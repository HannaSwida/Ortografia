import React, {useState, useEffect} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import AnswerButton from "../../Components/AnswerButton";
import BadAnswerButton from "../../Components/BadAnswerButton";
import BigRoundButton from "../../Components/BigRoundButton";
import {COLORS} from "../../Colors";

function PickAnswer({navigation, route}) {
  const [correct, setCorrect] = useState(true);
  const {rules, badAns, goodAns, word, hiddenWord} = route.params;


  return (
    <View style={styles.container}>
      <Text style={styles.title}>{rules}</Text>
      <Text style={styles.subtitle}>Wybierz poprawną odpowiedź!</Text>
      <Text style={styles.word}>{hiddenWord}</Text>
      <View style={styles.buttons}>
       <AnswerButton answer={goodAns} isCorrect={true}/>
      <BadAnswerButton answer={badAns}/>
      </View>
      {correct && <View style={styles.correct}>
        <Text style={styles.correctAns}>Brawo, to dobra odpowiedź!</Text>
        <BigRoundButton
          navigation={navigation}
          onPress={() => navigation.navigate('Lesson')}
          style={styles.button}
          lessonType="Lesson"
          lessonTitle="Wróć do lekcji"
          rules="Rz czy ż?"
          word="Rycefsdfdsfsdrz"
          hiddenWord="Rsdfsfyce_"
          badAns="ż"
          goodAns="rz"
        />
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

export default PickAnswer;