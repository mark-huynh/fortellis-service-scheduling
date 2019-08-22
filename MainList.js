//List.js

import React, {Component} from 'react';
import CardInfo from './CardInfo';
import {FlatList, StyleSheet,} from 'react-native';
import {Content, View} from 'native-base';

import api from './apis/resource'

export default class MainList extends Component {
    state = {
        items: []
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
                        <View style={styles.container} >
                            <CardInfo
                                style = {styles.container}
                                // title={item.title}
                                title={item.remarks}
                                // customer={item.customer}
                                customer={item.dateTime}
                                // startTime={item.startTime}
                                startTime={item.dateTime}
                                // endTime={item.endTime}
                                endTime={item.dateTime.replace(/(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)Z/, "$3/$2/$1 $4:$5:$6")}
                                // description={item.description}
                                description={item.remarks}
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