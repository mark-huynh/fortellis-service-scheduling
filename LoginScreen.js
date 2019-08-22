import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import * as AppAuth from 'expo-app-auth';
import 'cred.js';

function cacheAuthAsync(authState) {
    return AsyncStorage.setItem(StorageKey, JSON.stringify(authState));
}

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'green',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    flexDirection: 'row',
    textAlign: 'center',
  },
    subtitle: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 20,
    flexDirection: 'row',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'grey',
    color: 'white',
    width: 30,
    alignItems: 'center',
  },
});

class LoginScreen extends React.Component {
    async signInAsync() {
        const authState = await AppAuth.authAsync(config);
        await cacheAuthAsync(authState);
        console.log('signInAsync', authState);
        this.props.navigation.navigate('HomeScreen');
    }

render() {
    return (
      <View>
        <Text style = {styles.title}>
          Scheduling APP
          </Text>
        <Text style = {styles.subtitle}>
          Using Fortellis
          </Text>
        <Text style = {styles.title} >
          LOGIN
        </Text>
        <Button style = { styles.button } onPress={ () => this.signInAsync() } title="Login"/>
      </View>
    );
  }
};

export default LoginScreen;