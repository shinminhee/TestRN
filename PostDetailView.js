import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import { RefresherListView, LoadingBarIndicator } from 'react-native-refresher';


// class PostDetailView extends React.Component {
//   constructor() {
//     super();
//     this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: this.ds.cloneWithRows(["Row 1", "Row 2"]),
//     };
//   }
//   onRefresh() {
//   	// You can either return a promise or a callback
//     this.setState({dataSource:this.fillRows(["Row 1", "Row 2", "Row 3", "Row 4"])});
//   }
//   render() {
//     return (
//       <View style={{flex:1}}>
//         <RefresherListView
//           dataSource={this.state.dataSource}
//           onRefresh={this.onRefresh.bind(this)}
//           indicator={<LoadingBarIndicator />}
//           renderRow={(rowData) => <View style={{padding:10,borderBottomColor: '#CCCCCC', backgroundColor: 'white',borderBottomWidth: 1}}><Text>{rowData}</Text></View>}
//         />
//       </View>
//     );
//   }
// };

function PostDetailView({ navigation }) {
  return (
    <View>
      <Text>aaaa</Text>
    
    </View>
  );
}

export default PostDetailView;