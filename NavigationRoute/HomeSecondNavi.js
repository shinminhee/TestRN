import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PostScreen from '../View/PostScreen';
import PostDetailView from '../PostDetailView';
import DropNextView from '../DropNextView';

const Stack = createStackNavigator();

const HomeSecondNavi = () => {
    return (
        <Stack.Navigator initialRouteName='Post'>
            <Stack.Screen
                name='Post'
                component={PostScreen}
                options={{
                    headerShown: false
                }}/>
         
            <Stack.Screen
                name='PostDetailView'
                component={PostDetailView}
                options={{
                    headerTitle: '상세 화면'
                }}/>
        </Stack.Navigator>
    );
}

export default HomeSecondNavi;


{/* <Stack.Screen
name='DropNextView'
component={DropNextView}
options={{
    headerTitle: '정보가져오기'
}}/> */}