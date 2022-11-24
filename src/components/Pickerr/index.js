import React from 'react';      
import RNPickerSelect from 'react-native-picker-select'

export default function Pickerr(){
 return (
   <RNPickerSelect
        items={[
            {key: 1, label: 'USD', value: 'USD'},
            {key: 2, label: 'EUR', value: 'EUR'}
        ]}
        onValueChange={ (value) => console.log( value ) }
   />
  );
}