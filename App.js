import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MainList from './MainList';
import {Spinner} from 'native-base'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'You drink Trulys? I bet you have an Android',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Spinner></Spinner> */}
        <MainList></MainList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
