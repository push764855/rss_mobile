/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import consumptionScreen from '../screens/consumption';
import convertedItemsScreen from '../screens/convertedItem';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        indicatorStyle: {
          backgroundColor: '#51B26D',
        },
      }}>
      <Tab.Screen
        name="Đổi Chai"
        component={convertedItemsScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#51B26D' : 'black',
                fontSize: 17,
                fontFamily: 'Mulish-Bold',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              Đổi chai
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Tiêu Dùng"
        component={consumptionScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#51B26D' : 'black',
                fontSize: 17,
                fontFamily: 'Mulish-Bold',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              Tiêu dùng
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
