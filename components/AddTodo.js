import React,{useState} from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'


export default function AddTodo({handleAdd}){
    const [text, setText]=useState('')

    const handleChange = val =>{
        setText(val)
    }

    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder='New ...'
                onChangeText={handleChange}
            />
            <Button 
                title='Add Todo'
                color='coral'
                onPress={() => handleAdd(text)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor:'#ddd'
    }
})