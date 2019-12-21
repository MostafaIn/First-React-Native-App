import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name,setName]=useState('shaun')
  const [age, setAge]=useState(40)

  const handleClick = () =>{
    
  }
  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. John Doe'
        onChangeText={ val => setName(val)} />
        <Text>Enter age: </Text>
      <TextInput 
        style={styles.input}
        placeholder='e.g. 99'
        keyboardType='numeric'
        onChangeText={ val => setAge(val)} />
      <View style={styles.buttonContainer}>
        {/* <Button title="update name" onPress={handleClick} /> */}
      </View>
      <Text>My name is {name}, {age} yearsold!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer:{
    marginTop: 20,
    backgroundColor: '#eee',
  },
  input:{
    borderWidth: 1,
    borderColor:'#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
