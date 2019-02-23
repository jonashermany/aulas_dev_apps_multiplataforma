import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';

class Botao extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    //Estilos
    this.styles = StyleSheet.create({

      botao: {
        width: 240,
        height: 50,
        borderWidth: 2,
        borderColor: props.cor,
        borderRadius:25
      },

      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },

      botaoTexto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
      }
    });
  }

  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoTexto}>{this.props.titulo}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class App extends Component {
  //Implementar o método render - dizendo como a tela se desenha

  constructor(props) {
    super(props);
    // definindo o objeto de estado
    this.state = {
      n1: '',
      n2: '',
      soma: ''
    }

    this.stateN1 = this.stateN1.bind(this);
    this.stateN2 = this.stateN2.bind(this);
    this.somar = this.somar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  stateN1(n1) {
    let state = this.state;
    state.n1 = parseFloat(n1);
    this.setState(state); //IMPORTANTE
  }

  stateN2(n2) {
    let state = this.state;
    state.n2 = parseFloat(n2);
    this.setState(state); //IMPORTANTE
  }

  somar() {
    let state = this.state;
    state.soma = state.n1 + state.n2;
    this.setState(state);
  }

  limpar() {
    let state = this.state;
    state = {
      n1: '',
      n2: '',
      soma: ''
    }
    this.setState(state);
  }

  render() {
    return (
      <View style={styles.principal}>
        {/* header */}
        <View style={styles.header}>
          <Text style={styles.texto}>Cabeçalho</Text>
        </View>

        {/* corpo */}
        <View style={styles.corpo}>
          <TextInput placeholder="Primeiro Número" keyboardType='numeric' onChangeText={(n1) => this.stateN1(n1)} style={styles.inputNumbers}>{this.state.n1}</TextInput>
          <TextInput placeholder="Segundo Número" keyboardType='numeric' onChangeText={(n2) => this.stateN2(n2)} style={styles.inputNumbers}>{this.state.n2}</TextInput>
          
          <Text style={styles.resultadoCalculo}>{this.state.soma}</Text>

          {/*Botão customizado */}
          <Botao cor='blue' titulo='Somar' onPress={this.somar}/>
          <Botao cor='red' titulo='Limpar' onPress={this.limpar}/>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Text style={styles.texto}>Rodapé</Text>
        </View>
      </View>
    );
  }
}

//Estilos da aplicação
const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#ffffff',
    flex: 1
  },
  header: {
    backgroundColor: 'green',
    color: '#ffffff',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  corpo: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputNumbers: {
    fontSize: 15,
    borderWidth: 1
  },
  resultadoCalculo: {
    fontSize: 80,
    color: 'green'
  },
  footer: {
    color: '#ffffff',
    backgroundColor: 'blue',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});