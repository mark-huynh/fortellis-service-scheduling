//List.js

import React, { Component } from 'react';
import ListObject from './ListObject';
import {
    StyleSheet,
    View,
    SectionList,
    Text,
    Platform,
    Alert,
  } from 'react-native';



export default class List extends Component {
    render() {
        var A = [
            { title: 'Entry_1' },
            { title: 'Entry_2' }
        ]

        var B = [
            { title: 'Entry_Alpha' },
            { title: 'Entry_Beta' }
        ]

        //return <Text>Hello world!</Text>
        return <View style={{   flex: 1, justifyContent: 'center',     alignItems: 'center',}}>
            <SectionList style={{justifyContent: 'center'}}
                sections = {[
                    { title: 'Section 1', data: 'A' },
                    { title: 'Section 2', data: 'B' }
                ]}
                renderItem = {({ item }) => (
                    <View>
                        {/* Replace with Mark's appointment component */}
                        <ListObject></ListObject>
                    </View>
                )}
            />
            </View>
    }




}