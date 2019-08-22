import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Container, Fab, Icon } from 'native-base';

class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: "Appointment Details",
        headerStyle: {
            backgroundColor: '#5067FF',
        },
        headerTitleStyle: {
            color: '#FFFFFF',
        },
    };

    render() {
        return (
            <View>
                <Text>Appointment ID: {this.props.navigation.getParam('appointmentID', 999)}</Text>
                <Text>Appointment Date: {this.props.navigation.getParam('dateTime', 999)}</Text>
                <Text>Description:</Text>
                <Text>{this.props.navigation.getParam('description', 999)}</Text>

                <Text>Vehicle Information</Text>
                <Text>{this.props.navigation.getParam('vehicleUnits', 999)} : {this.props.navigation.getParam('vehicleValue', 999)}</Text>
                <Text>MORE INFO COULD BE OPTAINED USING VEHICLE API</Text>

                <Text>Customer Information</Text>
                <Text>Customer ID: "NEED CUSTOMER API CALL" </Text>
                <Text>LastName, FirstName : "NEED CUSTOMER API CALL"</Text>
                <Text>Email: "NEED CUSTOMER API CALL"</Text>
                <Text>Phone Number: ({this.props.navigation.getParam('phoneType', 999)}) {this.props.navigation.getParam('phoneNumber', 999)}</Text>
                <Text>Availability</Text>
                <Text>{this.props.navigation.getParam('startDay', 999)} - {this.props.navigation.getParam('endDay', 999)}</Text>
                <Text>From {this.props.navigation.getParam('startTime', 999)} to {this.props.navigation.getParam('endTime', 999)} </Text>
            </View>
        )
    }
}
export default DetailsScreen;