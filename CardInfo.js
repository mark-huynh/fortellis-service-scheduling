import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import { Platform, StyleSheet, View } from 'react-native';
import { Header, Button, ActionSheet } from "native-base";

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
var BUTTONS = ["Change Appointment", "Delete Appointment", "Cancel"];


class CardInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      // <Container>
        <Content>
          <Card>
          <CardItem header>
              <Text>{this.props.startTime}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {this.props.title}
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button
            onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
          >
            <Text>Modify Appointment</Text>
          </Button>
            </CardItem>
          </Card>
        </Content>
      // </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "200px"
  }
});




export default CardInfo;