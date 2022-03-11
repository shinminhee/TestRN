// import React, { Component } from 'react';
import * as React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'

const countries = ["Egypt", "Canada", "Australia", "Ireland"]

function goMainScreen() {
    this
        .props
        .navigation
        .navigate('DropNextView', {selectedItem: this.state.selectedItem});
}

function PostScreen({navigation}) {

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <Text>Go to Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('PostDetailView')}/>

            <Button 
                title='넘겨서 확인' 
                onPress={() => navigation.push('DropNextView')}/>

        </View>
    );
}

export default PostScreen;

//   , {selectedItem: dropItem.selectedItem}

{/* <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected if data array is an array of objects
                    // then return selectedItem.property to render after item is selected
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown if data array is an array of
                    // objects then return item.property to represent item in dropdown

                    return item
                }}
                onChangeText={(value) => this.setState({selectedItem: value})}/> */
}