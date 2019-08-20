import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'lightgreen',
    color: 'white',
    fontSize: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'grey',
    color: 'white',
    width: 30,
    alignItems: 'center',
  },
});

class LoginScreen extends React.Component {
render() {  
    return (
      <View>
        <Text style = {styles.title}>
          Scheduling APP
          </Text>
        <Text style = {styles.title}>
          Using Fortellis
          </Text>
        <Text style = {styles.title} >
          LOGIN
        </Text>
        <Button style = {styles.button} onPress={() => this.props.navigation.navigate('HomeScreen')} title="Login"/>
      </View>
    );
  }
};

export default LoginScreen;