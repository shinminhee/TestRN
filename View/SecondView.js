import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';


function SecondView({ navigation }) {
  return (
    <View>
      <Text>aaaa</Text>
      <Button
        title="Go to next"
        onPress={() => navigation.navigate('ThirdScreen')}
      />
    </View>
  );
}

export default SecondView;

// function SecondView({ navigation }) {
//     return (
//       <AppNavigator />
//     );
//   }
  
//   export default SecondView;

{/* <Tab.Navigator>
      <Tab.Screen name="First" component={First} />
      <Tab.Screen name="Second" component={Second} />
      <Tab.Screen name="Third" component={Third} />
    </Tab.Navigator> */}




 
// function HomeScreen({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//         <Button
//           title="Go back to first screen in stack"
//           onPress={() => navigation.popToTop()}
//         />
//       </View>
//     );
//   }

// export default class SecondView extends Component {

//     render() {
//         return (
     
//             <View style={{backgroundColor: "tomato"}}>
//                 <Text style={{ fontSize: 30 }}>
//                 SecondView
//                 </Text>
//             </View>

//         );
//     }
// }

