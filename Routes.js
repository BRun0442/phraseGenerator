import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home/home';
import Gerador from './src/pages/gerador/gerador';

const { Screen, Navigator } = createNativeStackNavigator();

function Routes()
{
    return(
        <Navigator initialRouteName='home'>
            <Screen name="home" component={Home} options={{ headerShown: false, }}/>
            <Screen name="gerador" component={Gerador} options={{ headerShown: false, }}/>
        </Navigator>
    )
}

export default Routes;