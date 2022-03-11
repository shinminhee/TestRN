import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


function Third({ navigation }) {
  return (
    <View>
      <Text>aaaa</Text>
      <Button
        title="끝"
        onPress={() => navigation.navigate('SecondView')}
      />
    </View>
  );
}

export default function () {
  return (
    
        <Third />
  );
}

