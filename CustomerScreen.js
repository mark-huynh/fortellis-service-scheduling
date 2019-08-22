import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { Container, Fab, Icon } from 'native-base';

class CustomerScreen extends React.Component {
    static navigationOptions = {
        title: "Customer Information",
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
                <Text>Customer ID</Text>
                <Text>LastName, FirstName</Text>
                <Text>Email</Text>
                <Text>Phone Number</Text>

                {/* Phone Number
                Call pref Start Day
                Call pref End Day
                Call pref start time
                call pref end time */}
                {/* <Text>Customer ID: {this.props.customerID}</Text>
                <Text>{this.props.lastName}, {this.props.firstName}</Text>
                <Text>Email: {this.props.email}</Text>
                <Text>Phone#: {this.props.phoneNumber}</Text */}
                <Button
                    title="Vehicle"
                    color="#5067FF"            
                />
            </View>
        )
    }
}
export default CustomerScreen;