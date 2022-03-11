import React, { Component } from 'react';
import { View, Text, } from 'react-native';



export default class Third extends Component {
    
    render() {
        return (
            <View
            style={{
                flex: 1,
                backgroundColor: '#67tomato3ab7'
            }}>

                <MyButton />
            </View>
        );
    }
}
