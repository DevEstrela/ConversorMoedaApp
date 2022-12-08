import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Pickerr from './src/components/Pickerr';
import Result from './src/components/Result';
import api from './src/services/api'


export default function App() {
  const [moeda, setMoeda] = useState('')
 return (
   <View style={styles.container}>

      <View style={styles.areaPicker}>
          <Text style={styles.selectText }>Selecione sua Moeda</Text>
          <Pickerr/>
      </View>

      <View style={styles.areaMoeda}>
        <Text style={styles.textMoeda }>Digite um valor para converter em (R$)</Text>
        <TextInput
          onChangeText={(text) => setMoeda(text)}
          style={styles.input}
          keyboardType="numeric"
          placeholder='EX: 150'
        />
      </View>

      <TouchableOpacity style={styles.areaButton}>
        <Text style={styles.textButton}>Converter</Text>
      </TouchableOpacity>

      <Result/>

   </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121212',
    padding: 20
  },
  areaPicker:{
    backgroundColor: '#FFF',
    marginTop: 10,
    height: 90,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingLeft: 9,
    paddingTop: 9
  },
  selectText:{
    color: '#000',
  },
  areaMoeda:{
    backgroundColor: '#FFF',
    marginTop: 2,
    height:95,
    paddingLeft: 9,
    paddingTop: 9
  },
  areaButton:{
    backgroundColor: 'red',
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  textButton:{
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold'

  },
  input:{
    color: '#000',
    padding: 5,
    marginTop: 15
  }
})