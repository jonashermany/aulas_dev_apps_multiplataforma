import React, { Component } from 'react';
import { View, StyleSheet, Image, Button, TouchableOpacity, Text, TextInput } from 'react-native';

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
//Componente
class MinhaImagem extends Component {
  //Mesmo no componente é necessário escrever um render()

  render() {
    return (
      <Image source={require('./src/img/react.png')} style={{ width: parseInt(this.props.largura), height: parseInt(this.props.altura) }}></Image>
    );
  }
}

export default class App extends Component {
  //Implementar o método render - dizendo como a tela se desenha

  constructor(props) {
    super(props);
    // definindo o objeto de estado
    this.state = {
      texto = ''
    }

    this.exibirTexto = this.exibirTexto.bind(this);
    this.clicar = this.clicar.bind(this);
  }

  exibirTexto(texto) {
    let state = this.state;

    if (texto == '') {
      state.texto = 'Nenhum texto digitado.';
    } else {
      state.texto = texto;
    }

    this.setState(state); //IMPORTANTE
  }

  //Implementando função do clicar
  clicar() {
    alert('Botão foi clicado!');
  }

  render() {
    return (
      < View style={styles.principal}>

        {/*Utilizando props */}
        <MinhaImagem altura='100' largura='100' />
        <Button title='Clique Aqui!' onPress={this.clicar}></Button>

        {/*Botão customizado */}
        <Botao cor='red' titulo='Clique aqui!' onPress={this.clicar}/>

        <TextInput placeholder="Digite o texto" onChangeText={(texto) => this.exibirTexto(texto)} style={styles.textoInput}></TextInput>
        <Text style={styles.texto}>{this.state.texto}</Text>
      </View >
    );
  }
}

//Estilos da aplicação
const styles = StyleSheet.create({

  principal: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  textoInput: {
    fontSize: 15,
    borderWidth: 1
  },
  texto: {
    fontSize: 40,
    color: 'blue',
    fontWeight: 'bold'
  }
});