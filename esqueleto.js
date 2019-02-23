import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={styles.principal}>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#ffffff',
    flex: 1
  }
});