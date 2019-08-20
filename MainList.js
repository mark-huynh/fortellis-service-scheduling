//List.js

import React, { Component } from 'react';
import CardInfo from './CardInfo';
import {
    StyleSheet,
    View,
    SectionList,
    Text,
    Platform,
    Alert,
} from 'react-native';



export default class MainList extends Component {
    state = {
        sections: {
            A: [
                { title: 'Entry_1' },
                { title: 'Entry_2' }
            ],

            B: [
                { title: 'Entry_Alpha' },
                { title: 'Entry_Beta' }
            ],
        },

        items: [
            {
                title: 'Repair',
                customer: 'ABC',
                startTime: '0800',
                endTime: '0930',
                description: '',
            },
            {
                title: 'Coffee Break',
                customer: 'N/A',
                startTime: '0930',
                endTime: '0945',
                description: '',
            },
            {
                title: 'Meet with Customer',
                customer: 'ZYX',
                startTime: '1045',
                endTime: '1232',
                description: '',
            },
        ]
    }
    ListItemSeparator = () => {
        return (
            <View style={{ height: 50, width: '100%', backgroundColor: '#C8C8C8' }} />
        );
    };

    render() {

        var stuff = [{
            title: 'Repair',
            customer: 'ABC',
            startTime: '0800',
            endTime: '0930',
            description: '',
        },
        {
            title: 'Coffee Break',
            customer: 'N/A',
            startTime: '0930',
            endTime: '0945',
            description: '',
        }]

        //return <Text>Hello world!</Text>
        return <View style={{ flex: 1, justifyContent: 'center' }}>
            <SectionList style={{ justifyContent: 'center', paddingVertical: 20 }}
                ItemSeparatorComponent={this.FlatListItemSeparator}
                sections={[
                    { title: 'Today', data: stuff },
                    // { title: 'Tomorrow', data: '2' },
                    // { title: 'Next Week', data: '3'},
                    // { title: 'Next Week', data: '4'},
                    // { title: 'Beyond Next Week', data: '5'},
                ]}


                renderSectionHeader={({ section }) => (
                    <Text style={styles.SectionHeaderStyle}> {section.title} </Text>
                )}

                renderItem={({ item }) => (
                    <View>
                        <CardInfo
                            title={item.title}
                            customer={item.customer}
                            startTime={item.startTime}
                            endTime={item.endTime}
                            description={item.description}
                        />
                    </View>
                )}

                keyExtractor={(item) => item.id}
            />
            {/* {this.state.items.map((item) => <Text>{item.title}</Text>)} */}

        </View>
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
});