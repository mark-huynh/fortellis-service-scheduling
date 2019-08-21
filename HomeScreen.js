import React, { Component } from 'react';
import { StyleSheet, View, Text, Header, Button } from 'react-native';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { Spinner, Root } from 'native-base';
import * as Font from 'expo-font';
import HomeScreenHeader from './HomeScreenHeader';
import { Ionicons } from '@expo/vector-icons';
import MainList from './MainList';
// import { createDrawerNavigator } from 'react-navigation';
import { TouchableHighlight } from 'react-native-gesture-handler';

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
            <Root>
              <HomeScreenHeader />
              {/* <MainList></MainList> */}
              {/* <Ionicons
                name="ios-add-circle-outline"
                size={600}
                color="green"Î
                style={
                  position: 'absolute',
                  bottom: 10,
                  right: 20,
                }
            />   */}
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