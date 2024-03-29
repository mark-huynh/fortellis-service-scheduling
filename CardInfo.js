import React, { Component } from "react";
import { Container, Content, Card, CardItem, Body, Text } from "native-base";
import { Platform, StyleSheet, View } from "react-native";
import { Header, Button, ActionSheet } from "native-base";
import { TouchableHighlight } from "react-native-gesture-handler";

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
var BUTTONS = ["Change Appointment", "Delete Appointment", "Cancel"];

class CardInfo extends Component {
  state = {
    openCustomerInfo: false
  };

  toggleExpanded = () => {
    console.log("EXPANDING THIS ITEM!");
    this.setState({
      expanded: !this.state.expanded,
      informationExpanded: !this.state.informationExpanded
    });
  };

  render() {
    return (
      // <Container>
      <Content>
        <Card>
          <TouchableHighlight
            onPress={() => this.props.navigation.navigate("DetailsScreen", {
              appointmentID: this.props.appointmentID,
              dateTime: this.props.dateTime,
              description: this.props.description,
              remarks: this.props.remarks,
              vehicleUnits: this.props.units,
              vehicleValue: this.props.miles,
              phoneType: this.props.label,
              phoneNumber: this.props.phoneNumber,
              startDay: this.props.start,
              endDay: this.props.endDay,
              startTime: this.props.startT,
              endTime: this.props.end
            })}
          >
            <View>
              <CardItem header>
                <Text>{this.props.startTime}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>{this.props.title}</Text>
                </Body>
              </CardItem>
            </View>
          </TouchableHighlight>
          <CardItem />
          <CardItem footer bordered>
            <Button
              onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: "Modify Appointment"
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                )
              }
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
    width: 200
    // backgroundColor: '#fff',
    // margin:10,
    // overflow:'hidden'
  },

  expandedTrue: {
    backgroundColor: "#000000",
    maxHeight: 100
  },

  expandedFalse: {
    maxHeight: 250
  },

  informationExpandedTrue: {
    flex: 3,
    width: 6000,
    height: 200,
    maxHeight: 500,
    backgroundColor: "#f1ab32"
  },

  informationExpandedFalse: {},

  titleContainer: {
    flexDirection: "row"
  },
  title: {
    flex: 1,
    padding: 10,
    color: "#2a2f43",
    fontWeight: "bold"
  },
  button: {},
  buttonImage: {
    width: 30,
    height: 25
  },
  body: {
    padding: 10,
    paddingTop: 0
  }
});

export default CardInfo;
