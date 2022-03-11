import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import First from './TabViewRoute/First';
import Second from './TabViewRoute/Second';
import Third from './TabViewRoute/Third';

const Stack = createStackNavigator();

const HomeTabViewRoutes = () => {
    return (
        <Stack.Navigator initialRouteName='첫번째'>
            <Stack.Screen
                name='첫번째'
                component={First}
                options={{
                    headerShown: false
                }}/>
            <Stack.Screen
                name='두번째'
                component={Second}
                options={{
                    headerShown: false
                                    }}/>
            <Stack.Screen
                name='세번쨰'
                component={Third}
                options={{
                    headerTitle: '상세 화면'
                }}/>
        </Stack.Navigator>
    );
}

export default HomeTabViewRoutes;
