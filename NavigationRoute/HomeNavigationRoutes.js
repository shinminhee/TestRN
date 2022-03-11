import * as React from 'react';
import MainScreen from '../View/MainScreen';
import {createStackNavigator} from '@react-navigation/stack';

import SecondView from '../View/SecondView';
import ThirdScreen from '../View/ThirdScreen';
import DetailView from '../ DetailView';

const Stack = createStackNavigator();

const HomeNavigationRoutes = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
                name='Home'
                component={MainScreen}
                options={{
                    headerShown: false
                }}/>
            <Stack.Screen
                name='DetailView'
                component={DetailView}
                options={{
                    headerTitle: '상세 화면'
                }}/>
            <Stack.Screen name='ThirdScreen' component={ThirdScreen}/>

        </Stack.Navigator>
    );
}

export default HomeNavigationRoutes;
