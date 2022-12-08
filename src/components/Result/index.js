import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class Result extends Component {
 render(){
  return (
    <View style={styles.container}>
        <Text style={styles.text}> 3 USD </Text>
        <Text style={[styles.text, {fontSize: 17}] }> Corresponde a </Text>
        <Text style={styles.text}> 19,90 </Text>
    </View>
   );
 }
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