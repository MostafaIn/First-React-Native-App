import React,{useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos,setTodos]=useState([
    {key:'1', text:'buy some coffee.'},
    {key:'2', text:'creat react native app.'},
    {key:'3', text:'take a shower.'}
  ])

  const pressHandle = key =>{
    setTodos(prevTodos => prevTodos.filter(todo => todo.key !== key))
  }

  const handleAdd = text =>{
    (text.length > 3) ? setTodos( prevTodos =>{
      return[
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ]
    }) : 
    Alert.alert('OOPS!', 'must be over 3 chars.',[
      {text: 'understood', onPress : () => console.log('alert closed')}
    ]);
  }

  return (
    <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>
    <View style={styles.container}>
      <Header />
     <View style={styles.content}>
       <AddTodo handleAdd={handleAdd} />
       <View style={styles.list}>
         <FlatList 
          data={todos}
          renderItem={({item})=>(
          <TodoItem item={item} pressHandle={pressHandle} />
          )}
         />
       </View>
     </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    flex:1,
    backgroundColor: '#fff',
    padding:40,
  },
  list:{
    flex:1,
    backgroundColor: '#ddd',
    marginTop: 24,
    padding:30,
    fontSize: 24,
  }
});
