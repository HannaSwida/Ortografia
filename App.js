import * as React from 'react';
import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LessonMainPage from "./Pages/LessonMainPage";
import ExamMainPage from "./Pages/ExamMainPage";
import PickAnswer from "./Pages/Exercises/PickAnswer";
import {COLORS} from "./Colors";
import RZ from "./Pages/Lessons/RZ/RZ";

// ADAM : patrz komentarze
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ortografia!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lesson')}
      >
        <Text>LEKCJE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Exam')}
      >
        <Text>TEST</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function LessonScreen({navigation}) {
  return (
    <LessonMainPage navigation={navigation}/>
  );
}

function ExamScreen({navigation}) {
  return (
    <ExamMainPage navigation={navigation}/>
  );
}
// dla kazdego rz, sz etc kopiuj to
function RZScreen({navigation}) {
  return (
    <RZ navigation={navigation}/>
  );
}
function PickAnswerScreen({route, navigation}) {
  return (
    <PickAnswer route= {route} navigation={navigation}/>
  );
}

//dla kazdego rz, sz etc kopiuj stack <Stack.Screen name="...
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lesson" component={LessonScreen} />
        <Stack.Screen name="Exam" component={ExamScreen} />
        <Stack.Screen name="RZ" component={RZScreen} />
        <Stack.Screen name="PickAnswer" component={PickAnswerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height:100,
    width:200,
    padding:10,
    backgroundColor: COLORS.greenButton,
    borderRadius: 50,
    margin:20,
  },
  text:{
    textAlign: "center",
  },
});

export default App;