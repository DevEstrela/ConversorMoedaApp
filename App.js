import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Keyboard } from 'react-native';
import Pickerr from './src/components/Pickerr';
import Result from './src/components/Result';
import api from './src/services/api'


export default function App() {
  const [moeda, setMoeda] = useState([])
  const [loading, setLoading] = useState(true)
  const [moedaSelecionada, setMoedaSelecionada] = useState(null)
  const [moedaBvalor, setMoedaBvalor]= useState(0)

  const [valorMoeda, setValorMoeda] = useState(null);
  const [valorConvertido, setValorConvertido] = useState(0)

  useEffect(() => {
    async function loadMoedas(){

      const response = await api.get('all') 
      
      let arrayMoedas = []
      Object.keys(response.data).map((key) => {
        arrayMoedas.push({
          key: key,
          label: key,
          value: key
        })
      })

      setMoeda(arrayMoedas);
      setLoading(false)


    }

    loadMoedas();
  }, [])

    async function converter(){
      if(moedaSelecionada === null || moedaBvalor === 0){
        alert('Selecione uma moeda')
        return;
      }

      const response = await api.get(`all/${moedaSelecionada}-BRL`)
      
      let resultado = (response.data[moedaSelecionada].ask * parseFloat(moedaBvalor) )

      setValorConvertido(`R$ ${resultado.toFixed(2)}`)
      setValorMoeda(moedaBvalor)

      Keyboard.dismiss()

    }


  if(loading){

    return(
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>

           <ActivityIndicator color="#FFF" size={45}/>

      </View>
    )
    


  } else{

    return (
      <View style={styles.container}>
   
         <View style={styles.areaPicker}>
             <Text style={styles.selectText }>Selecione sua Moeda</Text>
             <Pickerr moeda={moeda} onChange={ (moeda) => setMoedaSelecionada(moeda)} />
         </View>
   
         <View style={styles.areaMoeda}>
           <Text style={styles.textMoeda }>Digite um valor para converter em (R$)</Text>
           <TextInput
             onChangeText={(text) => setMoedaBvalor(text)}
             style={styles.input}
             keyboardType="numeric"
             placeholder='EX: 150'
           />
         </View>
   
         <TouchableOpacity style={styles.areaButton} onPress={converter}>
           <Text style={styles.textButton}>Converter</Text>
         </TouchableOpacity>

        {valorConvertido !== 0 &&(
          <Result valorMoeda={valorMoeda} moedaSelecionada={moedaSelecionada} valorConvertido={valorConvertido} />
        )}
         
   
      </View>
     );
  }
 
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