import React, {Component} from 'react';

import {ActionSheet, Body, Button, Header, Icon, Right, Title} from "native-base";

const BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;

export default class HomeScreenHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Header>
        <Body>
          <Title>Servicing Appointments</Title>
        </Body>
        <Right>
          <Button
            title={ "more" }
            transparent
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
            <Icon name={ "more" } />
          </Button>
        </Right>
      </Header>
    );
  }
}