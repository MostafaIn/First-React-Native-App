import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name,setName]=useState('shaun')
  const [person, setPerson]=useState({name:'mario', age: 40})

  const handleClick = () =>{
    setName('Mostafa')
    setPerson({name:'Mostafa', age:35})
  }
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>this is {person.name} and he is {person.age} yearsold!</Text>
      <View style={styles.buttonContainer}>
        <Button title="update name" onPress={handleClick} />
      </View>
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
});
