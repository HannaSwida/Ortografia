import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {COLORS} from "../Colors";
import { useNavigation } from '@react-navigation/native';



function AnswerButton(props) {
  const [clicked,setClicked]=useState(true);

  return (
    <TouchableOpacity onPress={()=> setClicked(!clicked)}>
      <View style={[styles.button, (clicked ? null : styles.valid)]}>
        <Text style={styles.text}>{props.answer}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    height:100,
    width:100,
    backgroundColor:COLORS.buttonans,
    borderRadius: 50,
    margin:20,
    alignItems: "center",
    justifyContent: "center",
  },
  valid: {
    backgroundColor: COLORS.good,
    },
  notValid: {
    backgroundColor: 'red',
  },
  text:{
    fontWeight:"900",
    fontSize:30,
    textAlign: "center",
  },
});

export default AnswerButton;