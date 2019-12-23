import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function TodoItem ({item, pressHandle}){
    return(
        <TouchableOpacity>
            <View style={styles.item}>
                <Text>{item.text}</Text>
                <AntDesign name='delete' size={18} color='red' onPress={()=> pressHandle(item.key)} />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item:{
        padding:16, 
        marginTop: 16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection:'row',
        justifyContent:'space-between'
    }
})