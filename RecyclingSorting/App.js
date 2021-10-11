// In App.js in a new project
import 'react-native-gesture-handler';
import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Drawer from './navigation/drawer';
import MapScreens from './screens/map';
import HomeScreen from './screens/index';

import Tab from './navigation/tabs';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Map" component={MapScreens} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      {/* <Tab /> */}
    </NavigationContainer>
  );
}

export default App;
