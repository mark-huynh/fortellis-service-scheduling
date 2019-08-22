import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Fab, Icon, Spinner} from 'native-base';
import * as Font from 'expo-font';
import HomeScreenHeader from './HomeScreenHeader';
import {getStatusBarHeight} from "react-native-status-bar-height";
import MainList from './MainList';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    paddingTop: getStatusBarHeight() + 100,
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
      this.state.loaded ? (
        <Container>
          <HomeScreenHeader style={styles.header} />
          <MainList />
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={ () => this.props.navigation.navigate('LoginScreen') }
            title={"Login"}
          >
            <Icon name="add" />
          </Fab>
        </Container>
      ) : (
          <Spinner />
      )
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