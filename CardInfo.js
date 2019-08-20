import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';
import { Platform, StyleSheet, View } from 'react-native';
import { Header, Button, ActionSheet } from "native-base";

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];


class CardInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <Container>
        <Content>
          <Card>
          <CardItem header>
              <Text>{this.props.time}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                   falkdsf ladskjfla ;sdkjfal;skdjfal;sk djfal;sdk jfal;sdkfjal;dkjf a;lkdfj a;slfj ls;ad fjs;lkd jfa;lsk dajfl;sdj f;adlk jdl kfjl ksljfls 
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
      </Container>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     width: "200px"
//   }
// });




export default CardInfo;