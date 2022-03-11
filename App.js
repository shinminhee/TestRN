import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ChatScreen from './View/ChatScreen';
import PostScreen from './View/PostScreen';
import MenuScreen from './View/MenuScreen';
import SearchScreen from './View/SearchScreen';
import HomeNavigationRoutes from './NavigationRoute/HomeNavigationRoutes';
import HomeSecondNavi from './NavigationRoute/HomeSecondNavi';


const Stack = createStackNavigator();
export const Tab = createBottomTabNavigator();




function home() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="HOME" component={HomeNavigationRoutes} />
      <Tab.Screen name="CHAT" component={ChatScreen} />
      <Tab.Screen name="POST" component={HomeSecondNavi} />
      <Tab.Screen name="SEARCH" component={SearchScreen} />
      <Tab.Screen name="MENU" component={MenuScreen} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}


export default home;


{/* <Tab.Navigator>
<Tab.Screen
 name="Home"
 component={MainScreen}
 options={{
   tabBarLabel: 'Main',
 }}
/>
<Tab.Screen name="Chat" component={ChatScreen} />
<Tab.Screen name="Club" component={ClubScreen} />
<Tab.Screen name="Fantoo" component={FantooScreen} />

</Tab.Navigator> */}