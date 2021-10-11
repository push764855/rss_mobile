import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Drawer from './drawer';
import MapScreens from '../screens/map';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  <Stack.Navigator>
    <Stack.Screen name="Drawer" component={Drawer} />
    <Stack.Screen name="Map" component={MapScreens} />
  </Stack.Navigator>;
};
export default MainStack;
