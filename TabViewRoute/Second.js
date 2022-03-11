import React, { Component } from 'react';
import { View, Text, } from 'react-native';



export default class Second extends Component {
    
    render() {
        return (
            <View
            style={{
                flex: 1,
                backgroundColor: '#673ab7'
            }}>

                <MyButton />
            </View>
        );
    }
}


    
    // function Second() {
      
    //         return (
    //             <View style={{ flex: 1, backgroundColor: '#673ab7' }}>
    //                 <Text>
    //                     2번 뷰 !!!
    //                 </Text>
    //             </View>
    //         )
    // }
    
    
    // export default Second;
    
    
