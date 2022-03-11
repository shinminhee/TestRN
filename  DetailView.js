import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class DetailView extends Component {
    render() {
        return (
            <View style={{backgroundColor: 'yellow'}}>
                <Text style={{
                        fontSize: 30
                    }}>
                    Detail Screen
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
                    {this.props.route.params.textInputValue}
                </Text>
            </View>
        );
    }
}


// import * as React from 'react';
// import { View, Text, } from 'react-native';

// function DetailView
// () {
  
//         return (
//             <View style={{ flex: 1, backgroundColor: 'tomato' }}>
//                 <Text>
//                     디테일 위에 헤더 잘라봐라 
//                 </Text>
//             </View>
//         )
// }


// export default DetailView
// ;