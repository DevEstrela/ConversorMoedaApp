import React from 'react';      
import RNPickerSelect from 'react-native-picker-select'

export default function Pickerr(props){
  const placeholder = {
    label: 'Selecione uma moeda...',
    value: null,
    color: '#000'
  }
 return (
   <RNPickerSelect
        placeholder={placeholder}
        items={props.moeda}
        onValueChange={ (value) => props.onChange(value) }
        style={{
          inputAndroid:{
            fontSize: 20,
            color:'#000'
          },
          inputIOS:{
            fontSize: 20,
            color: '#000'
          }
        }}
   />
  );
}