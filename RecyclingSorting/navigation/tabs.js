/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, StyleSheet} from 'react-native';

import {
  PlaceScreenNavigator,
  TransactionScreenNavigator,
  HomeScreenNavigator,
} from '../navigation/stacks';

const Tab = createBottomTabNavigator();

const tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        showLabel: true,
        style: {
          elevation: 0,
          backgroundColor: '#ffffff',
          height: '10%',
        },
      }}>
      <Tab.Screen
        name="Place"
        component={PlaceScreenNavigator}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#51B26D' : '#BDBDBD',
                fontSize: 16,
                fontFamily: 'Mulish-SemiBold',
              }}>
              Địa điểm
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/Tab/pin.png')}
                resizeMode="contain"
                style={{
                  height: 32,
                  width: 32,
                  tintColor: focused ? '#51B26D' : '#BDBDBD',
                }}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreenNavigator}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#51B26D' : '#BDBDBD',
                fontSize: 17,
                fontFamily: 'Mulish-SemiBold',
              }}>
              Quét mã
            </Text>
          ),
          tabBarIcon: () => (
            <View
              style={{
                alignSelf: 'center',
                backgroundColor: '#E5E5E5',
                width: 90,
                height: 90,
                borderRadius: 45,
                bottom: 20,
                zIndex: 10,
                opacity: 1,
                justifyContent: 'center',
              }}>
              <View style={[styles.button, styles.actionBtn]}>
                <Image
                  source={require('../assets/Tab/Scan.png')}
                  resizeMode="contain"
                  style={{
                    width: 34,
                    height: 34,
                    tintColor: '#fff',
                  }}
                />
              </View>
            </View>
            //<View
            //   style={{
            //     alignItems: "center",
            //     justifyContent: "center",
            //     width: 75,
            //     height: 75,
            //     top: -20,
            //     borderRadius: 37.5,
            //     backgroundColor: "#59C389",
            //     position: "relative",
            //   }}
            // >
            //   <Image
            //     source={require("../assets/Tab/Scan.png")}
            //     resizeMode="contain"
            //     style={{
            //       width: 34,
            //       height: 34,
            //       tintColor: "#fff",
            //       position: "absolute",
            //       zIndex: 1,
            //     }}
            //   />
            // </View>
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={TransactionScreenNavigator}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? '#51B26D' : '#BDBDBD',
                fontSize: 16,
                fontFamily: 'Mulish-SemiBold',
              }}>
              Giao dịch
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../assets/Tab/Wallet.png')}
                resizeMode="contain"
                style={{
                  width: 32,
                  height: 32,
                  tintColor: focused ? '#51B26D' : '#BDBDBD',
                }}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#59C389',
    borderRadius: 35,
    alignSelf: 'center',
  },
  actionBtn: {
    backgroundColor: '#59C389',
  },
});

export default tabs;
