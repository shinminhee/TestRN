import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import MyButton from '../Components/MyButton';


function ChatScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.push('DetailsView')}
        />
     <MyButton />
      </View>
    );
  }
  
  export default ChatScreen;


// function ChatScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text> 채팅뷰다 여기</Text>
//         <Button title="Go back" onPress={() => navigation.goBack()} />
//       </View>
//     );
//   }

