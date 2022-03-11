import * as React from 'react';
import { View, Text, Button } from 'react-native';


function MenuScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default MenuScreen;


// export default class DetailScreen extends Component {
//     render() {
//         return (
//             <View>
//                 <Text style={{ fontSize: 30 }}>
//                     Detail Screen
//                 </Text>
//             </View>
//         );
//     }
// }



