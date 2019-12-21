import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [people,setPeople]=useState([
    {id:1, name:'mostafa'},
    {id:2, name:'rohafza'},
    {id:3, name:'edriis'},
    {id:4, name:'morteza'},
    {id:5, name:'farzana'},
    {id:6, name:'mosy'},
    {id:7, name:'rohy'},
    {id:8, name:'edi'},
    {id:9, name:'mori'},
    {id:10, name:'feri'},
  ])

  return (
    <View style={styles.container}>
      <ScrollView>
      {people.map( person => <View key={person.id}><Text style={styles.item}>{person.name}</Text></View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop: 24,
    padding:30,
    backgroundColor: 'lightblue',
    fontSize: 24,
  }
});
