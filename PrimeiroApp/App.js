import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

export default class App extends Component {
  
  render() {

    let nome = "Jonas Hermany"

    return (
      <View style={{backgroundColor: 'red', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/*Cria uma view - componente container para os outros componentes*/}
        <Text style={{color: 'white', fontSize: 40, height: 120, fontWeight: 'bold'}}>Meu primeiro App.</Text>
        <Image source={ require('./src/img/primeiroapp.png') }></Image>
        <Text style={{fontSize: 20, color: 'black'}}>{nome}</Text>
      </View>
    );
  }

}