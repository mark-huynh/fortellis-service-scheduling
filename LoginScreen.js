import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  title: {
    backgroundColor: '#521ee1',
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 30,
    flexDirection: 'row',
    textAlign: 'center',
  },
    subtitle: {
    backgroundColor: '#521ee1',
    color: '#ffffff',
    fontSize: 20,
    flexDirection: 'row',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#80807f',
    color: '#ffffff',
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
        <Text style = {styles.subtitle}>
          Using Fortellis
          </Text>
        <Text style = {styles.title} >
          LOGIN
        </Text>
        <Button style = { styles.button } onPress={ () => this.props.navigation.navigate('HomeScreen') } title="Login"/>
      </View>
    );
  }
};

export default LoginScreen;