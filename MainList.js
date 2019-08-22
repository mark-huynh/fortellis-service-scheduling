//List.js

import React, {Component} from 'react';
import CardInfo from './CardInfo';
import {FlatList, StyleSheet,} from 'react-native';
import {Content, View} from 'native-base';

import api from './apis/resource'

export default class MainList extends Component {
    state = {
        items: [],
        time: ""
    }

    componentDidMount = async () => {
        this.setState({items: await api.fetchSchedule().items});
    }

    ListItemSeparator = () => {
        return (
            <View style={{ height: 50, width: '100%', backgroundColor: '#C8C8C8' }} />
        );
    };

    render() {
        return(
            <Content>
                <FlatList
                    contentContainerStyle = {styles.container}
                    data = {this.state.items}
                    renderItem={({ item }) => (
                        console.log(item.dateTime), 
                        console.log(Date(item.dateTime).toString()),
                        <View style={styles.container} >
                            <CardInfo
                                style = {styles.container}
                                // title={item.title}
                                title={item.remarks}
                                // customer={item.customer}
                                customer={item.dateTime}
                                // startTime={item.startTime}
                                // endTime={item.endTime}
                                endTime={Date(item.dateTime).toLocaleString()}
                                // description={item.description}
                                description={item.description}

                                appointmentID={item.appointmentId}
                                startTime={item.dateTime.replace(
                                    /([0-9]{4})\-([0-9]{2})\-([0-9]{2})T([0-9]{2}):([0-9]{2}).*/,
                                    (a, b, c, d, e, f) => {
                                        return months[c] + " " + d + ", " + b + "  " + e + ":" + f;
                                    }
                                )}
                                remarks={item.remarks}
                                units={item.vehicleMileage.units}
                                miles={item.vehicleMileage.value}
                                label={item.contact.label}
                                phoneNumber={item.contact.uri}
                                start={item.contact.preferences[0].startDay}
                                endDay={item.contact.preferences[0].endDay}
                                startT={item.contact.preferences[0].startTime}
                                end={item.contact.preferences[0].endTime}
                                navigation={this.props.navigation}
                            />
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </Content>
        )
    }




}

const styles = StyleSheet.create({
    SectionHeaderStyle: {
        backgroundColor: '#CDDC89',
        fontSize: 20,
        padding: 5,
        color: '#fff',
    },
    SectionListItemStyle: {
        fontSize: 15,
        padding: 15,
        color: '#000',
        backgroundColor: '#F5F5F5',
    },
    container: {
        justifyContent: 'center',
    }
});

const months = {
    "01": "Jan.",  
    "02": "Feb.",
    "03": "Mar.",
    "04": "Apr.",
    "05": "May",
    "06": "Jun.",
    "07": "Jul.",
    "08": "Aug.",
    "09": "Sep.",
    "10": "Oct.",
    "11": "Nov.",
    "12": "Dec."
};