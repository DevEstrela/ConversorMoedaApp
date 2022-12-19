import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default function Result(props){
  return (
    <View style={styles.container}>
        <Text style={styles.text}> {props.valorMoeda} {props.moedaSelecionada} </Text>
        <Text style={[styles.text, {fontSize: 17}] }> Corresponde a </Text>
        <Text style={styles.text}> {props.valorConvertido} </Text>
    </View>
   );
 }

const styles = StyleSheet.create({
container:{
    backgroundColor: '#FFF',
    height: 190,
    justifyContent: 'center',
    alignItems: 'center'

},
text:{
    color: '#000',
    fontSize: 39,
    fontWeight: 'bold'
}

})