import React, {Component} from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import MyButton from '../Components/MyButton';


export default class First extends Component {
    state = {
        textInputValue: null
        
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ff4081'
                }}>
                <TextInput
                    style={{
                        backgroundColor: '#aaaaaa',
                        borderRadius: 5,
                        padding: 5,
                        margin: 5
                    }}
                    onChangeText={(value) => this.setState({textInputValue: value})}/>
                <Button onPress={() => this.goMainScreen()} title='넘겨서 확인'/>
                <MyButton />
            </View>
        );
    }
    goMainScreen() {
        this
            .props
            .navigation
            .navigate('DetailView', {textInputValue: this.state.textInputValue});
    }

}

const styles = StyleSheet.create({
    smallView: {
        flex: 0.5,
        backgroundColor: 'white',
        justifyContent: 'center',

    },
    button: {
        backgroundColor: 'teal',
        justifyContent: 'center',
        alignItems: 'flex-end',

    },
    textInput: {
        backgroundColor: 'white',
        marginHorizontal: 50,
        height: 100
    }
  });




// import * as React from 'react';
// import { View, Button, StyleSheet, TextInput} from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { NavigationContainer } from '@react-navigation/native';


// function First({ navigation })  {
//     const _onPress = item => {
//         navigation.navigate('DetailView', item)
//         // navigation.navigate('Settings', item)
        
//     }
//     state={ textInputValue:null }

//         return (
//             <View style={{ flex: 1, backgroundColor: '#ff4081' }}>
//                 <TextInput 
//                 style={styles.textInput}
//                 onChangeText={(value) => this.setState({textInputValue: value})}/>
//                 <Button 
//                 style={styles.button} 
//                 title="넘겨서 확인" 
//                 color={'white'} onPress={() => this.goMainScreen()}/>

//             </View>
//         )
// }


// export default First;



// const styles = StyleSheet.create({
//     pagerView: {
//         flex: 1
//     },
//     button: {
//         backgroundColor: 'teal',
//         justifyContent: 'center',
//         alignItems: 'flex-end',

//     },
//     textInput: {
//         backgroundColor: 'white',
//         marginHorizontal: 50,
//         height: 100
//     }
//   });