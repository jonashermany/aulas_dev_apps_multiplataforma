import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.principal}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.texto}>Cabeçalho</Text>
        </View>

        {/* corpo */}
        <View style={styles.corpo}>
          <Text style={styles.textoCorpo}>Text</Text>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.texto}>Rodapé</Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  header: {
    backgroundColor: 'green',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  corpo: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  textoCorpo: {
    fontSize: 80,
    color: 'yellow'
  },
  footer: {
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  texto: {
    fontSize: 20,
    color: 'white'
  }
});