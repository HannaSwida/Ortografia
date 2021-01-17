import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {COLORS} from "../Colors";


function BadAnswerButton(props) {
  const [color,setColor]=useState(true);

  return (
    <TouchableOpacity onPress={()=> setColor(!color)}>
      <View style={[styles.button, (color ? null : styles.notValid)]}>
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
  text:{
    textAlign: "center",
    fontWeight:"900",
    fontSize:30
  },
  valid: {
    backgroundColor: 'green',
    },
  notValid: {
    backgroundColor: COLORS.bad,
  },
});

export default BadAnswerButton;