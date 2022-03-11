import * as React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import {createStackNavigator} from '@react-navigation/stack';

import First from '../TabViewRoute/First';
import Second from '../TabViewRoute/Second';
import Third from '../TabViewRoute/Third';

const Stack = createStackNavigator();

const FirstRoute = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='1번'
                component={First}
                options={{
                    headerShown: false
                }}/>
        </Stack.Navigator>
    );
}

const SecondRoute = () => {
    return (
            <Stack.Screen
                name='2번'
                component={Second}
                options={{
                    headerShown: false
                }}/>
    )
};

const ThirdRoute = () => {
    return (
            <Stack.Screen
                name='3번'
                component={Third}
                options={{
                    headerShown: false
                }}/>
    )
};

const renderScene = SceneMap(
    {first: FirstRoute, second: SecondRoute, third: ThirdRoute}
);

// const renderScene = ({ route }) => {
//     switch (route.key) {
//       case "first":
//         return <FirstRoute  />;
//       case "second":
//         return <SecondRoute />;
//       default:
//         return null;
//     }
//   };
   

export default function TabViewExample() {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: 'first',
            title: 'First'
        }, {
            key: 'second',
            title: 'Second'
        }, {
            key: 'third',
            title: 'Third'
        }
    ]);

    return (
        <TabView
            navigationState={{
                index,
                routes
            }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{
                width: layout.width
            }}
            renderTabBar={props => (
                <TabBar
                    {...props}
                    indicatorStyle={{
                        backgroundColor: "rgb(240, 80, 20)",
                        border: "none"
                    }}
                    style={{
                        backgroundColor: "black",
                        fontWeight: "bold",
                        shadowOffset: {
                            height: 0,
                            width: 0
                        },
                        shadowColor: "transparent"
                    }}
                    pressColor={"transparent"}/>
            )}/>
    );
}

// import React, { Component } from 'react' import React, { Component } from
// 'react';  import * as React from 'react'; import { View, Text, Button,
// StyleSheet } from 'react-native'; import ViewPager from
// "@react-native-community/viewpager"; const MyPager = () => {   return (
// <ViewPager style={styles.pagerView} initialPage={0}>       <View key="1"
// style={{backgroundColor:'tomato'}}>         <Text>First page</Text> </View>
// <View key="2" style={{backgroundColor:'teal'}}> <Text>Second page</Text>
// </View>     </ViewPager>   ); }; const styles
// = StyleSheet.create({   pagerView: {     flex: 1,   }, }); export default
// MyPager;  function MainScreen({ navigation }) {    return (      <View
// style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// <Text>Main Screen</Text>        <Button          title="Go to Chat"
// onPress={() => navigation.navigate('SecondView')}        />      </View> ); }
// export default MainScreen;