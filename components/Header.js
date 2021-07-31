import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        <Text style = {styles.displayText}>Learn Debugging </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  displayText:{
    backgroundColor: 'crimson',
    color: '#1A3992',
    textAlign: 'center',
    fontSize: 30,
    fontFamily :"Rosemary",
  }
})