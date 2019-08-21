import React, { Component } from 'react';
import { StyleSheet, View, Text, Header, Button } from 'react-native';
import {Root, Spinner} from 'native-base';
import * as Font from 'expo-font';
import HomeScreenHeader from './HomeScreenHeader';
import {getStatusBarHeight} from "react-native-status-bar-height";
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import MainList from './MainList';
import { TouchableHighlight } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingTop: getStatusBarHeight() +100,
    height: 54 + getStatusBarHeight(),
  }
});

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
   static navigationOptions = {
     header: null
   };
  render() {  
    return (
      <View>
        {
          this.state.loaded ? (


            <Root styles={ styles.container }>
              <HomeScreenHeader style={ styles.header } />
              <MainList></MainList>
              <Ionicons
                name="ios-add-circle-outline"
                size={50}
                color="green"Î
                style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 20,
                }}
            />  
            </Root>
          ) : (
            <Spinner />
          )
        }
      </View>
    );
  };

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loaded: true });
  }
};

//hamburger icon taken from: https://static.thenounproject.com/png/204478-200.png

export default HomeScreen;