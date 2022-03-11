import * as React from 'react';
import {View, Text} from 'react-native';

function DropNextView({ navigation }) {
    return (
        <View style={{
            backgroundColor: 'yellow'
        }}>
        <Text style={{
                fontSize: 30
            }}>
            DropNextView
        </Text>
        <Text>
            Paramater Value
        </Text>
        <Text
            style={{
                fontSize: 30,
                backgroundColor: '#aaaaaa',
                borderRadius: 5,
                padding: 5,
                margin: 5
            }}>
        </Text>
    </View>
    );
}

export default DropNextView;
