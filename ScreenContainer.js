import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import AddEventScreen from './AddEventScreen';
import CardInfo from './CardInfo';
import DetailsScreen from './DetailsScreen';
import form from './form';

const NavigationStack = createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    HomeScreen: { screen: HomeScreen },
    AddEventScreen: { screen: AddEventScreen },
    DetailsScreen: { screen: DetailsScreen },
    CardInfo: { screen: CardInfo },
    form: {screen: form}
});

const Container = createAppContainer(NavigationStack);

export default Container; 