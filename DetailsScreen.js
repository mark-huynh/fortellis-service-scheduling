import React from 'react';
import { Text, View, Button, StyleSheet, Linking } from 'react-native';
import { Container, Fab, Icon } from 'native-base';

const styles = StyleSheet.create({
  title: {
      backgroundColor: '#5067FF',
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 20
  },
  field: {
      fontSize: 15
  },
});

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
                <Text style={styles.title} >Appointment Information</Text>
                <Text style={styles.field} >Appointment ID: {this.props.navigation.getParam('appointmentID', 999)}</Text>
                <Text style={styles.field} >Appointment Date: {this.props.navigation.getParam('dateTime', 999)}</Text>
                <Text style={styles.field} >Description:</Text>
                <Text style={styles.field} >{this.props.navigation.getParam('description', 999)}</Text>
                <Text style={styles.field} >Remarks:</Text>
                <Text style={styles.field} >{this.props.navigation.getParam('remarks', 999)}</Text>

                <Text style={styles.title} >Vehicle Information</Text>
                <Text style={styles.field} >{this.props.navigation.getParam('vehicleUnits', 999)} : {this.props.navigation.getParam('vehicleValue', 999)}</Text>
                <Text style={styles.field} >MORE INFO COULD BE OPTAINED USING VEHICLE API</Text>

                <Text style={styles.title} >Customer Information</Text>
                <Text style={styles.field} >Customer ID: "NEED CUSTOMER API CALL" </Text>
                <Text style={styles.field} >LastName, FirstName : "NEED CUSTOMER API CALL"</Text>
                <Text style={styles.field} >Email: "NEED CUSTOMER API CALL"</Text>
                <Text style={styles.field} onPress={ () => Linking.openURL(this.props.navigation.getParam('phoneNumber', 'tel:111-111-1111'))}>
                    Phone Number: ({this.props.navigation.getParam('phoneType', 999)}) {this.props.navigation.getParam('phoneNumber', 999)}
                </Text>
                <Text style={styles.field} >Availability</Text>
                <Text style={styles.field} >{this.props.navigation.getParam('startDay', 999)} - {this.props.navigation.getParam('endDay', 999)}</Text>
                <Text style={styles.field} >From {this.props.navigation.getParam('startTime', 999)} to {this.props.navigation.getParam('endTime', 999)} </Text>
            </View>
        )
    }
}
export default DetailsScreen;