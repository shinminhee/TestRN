import React from "react";
import { TouchableOpacity, Text } from "react-native"; // 리액트 네이티브에서 제공하는 컴포넌트 추가

// 재사용 컴포넌트 ... 커스텀 버튼 만드는건 이렇게 
const MyButton = () => {
    return (
        <TouchableOpacity
            style={{ 
            backgroundColor: '#3498db',
            padding: 16,
            margin: 10,
            borderRadius: 8,
            }}
            onPress={() => alert('Click!!!')}
        >
            <Text style={{ color: 'white', fontSize: 24}}>My Button</Text>
        </TouchableOpacity>
    );
};

export default MyButton;

// import React, {Component} from 'react';
// import {View, Text} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';


// class MyView extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         activeView: null,
//       }
//       this.views = [
//         (<View style={{ padding: 20 }}><Text>View 1</Text></View>),
//         (<View style={{ padding: 20 }}><Text>View 2</Text></View>),
//         (<View style={{ padding: 20 }}><Text>View 3</Text></View>),
//         (<View style={{ padding: 20 }}><Text>View 4</Text></View>),
//         (<View style={{ padding: 20 }}><Text>View 5</Text></View>),
//       ];
//     }
  
//     _setActive( index ) {
//       return () => {
//         this.setState({ activeView: index })
//       }
//     }
  
//     render() {
//       return (
//         <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//           {this.views.map( (view, index) => {
//           let containerStyle = [];
//           if ( index === this.state.activeView ) {
//             containerStyle.push({ borderWidth: 10 })
//           }
//           return (
//           <TouchableOpacity onPress={this._setActive(index)} style={containerStyle}>
//             {view}
//           </TouchableOpacity>
//           );
//           })}
//         </View>
//         );
//     }
//   }