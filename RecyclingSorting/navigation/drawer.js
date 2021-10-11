/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  TouchableRipple,
  Switch,
  Drawer,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Tabs from '../navigation/tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import {AuthContext} from '../component/context';

import {
  QRCodeScreenNavigator,
  PlaceScreenNavigator,
  TransactionScreenNavigator,
} from '../navigation/stacks';

const DrawerMain = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const CustomDrawer = props => {
  //const {signOut} = React.useContext(AuthContext);
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image source={require('../assets/man.png')} size={50} />
              <View style={{flexDirection: 'column', marginLeft: 15}}>
                <Title style={styles.title}>Đặng Văn A</Title>
                <Caption style={styles.caption}>@123hn432</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Trang chủ"
              labelStyle={{fontFamily: 'Mulish-Bold'}}
              onPress={() => {
                props.navigation.navigate('HomeScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Thông tin"
              labelStyle={{fontFamily: 'Mulish-Bold'}}
              onPress={() => {}}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="map-outline" color={color} size={size} />
              )}
              label="Bản đồ"
              labelStyle={{fontFamily: 'Mulish-Bold'}}
              onPress={() => {
                props.navigation.navigate('PlaceScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="wallet-outline" color={color} size={size} />
              )}
              label="Giao dịch"
              labelStyle={{fontFamily: 'Mulish-Bold'}}
              onPress={() => {
                props.navigation.navigate('TransactionScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Hổ trợ"
              labelStyle={{fontFamily: 'Mulish-Bold'}}
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          labelStyle={{fontFamily: 'Mulish-Bold'}}
          onPress={() => {
            //signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};

const drawers = () => {
  return (
    <DrawerMain.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <DrawerMain.Screen name="Info" component={TabView} />
      <DrawerMain.Screen name="HomeScreen" component={QRCodeScreenNavigator} />
      <DrawerMain.Screen name="PlaceScreen" component={PlaceScreenNavigator} />
      <DrawerMain.Screen
        name="TransactionScreen"
        component={TransactionScreenNavigator}
      />
    </DrawerMain.Navigator>
  );
};

const TabView = () => {
  return (
    <Stack.Navigator initialRouteName="Tab" headerMode="none">
      <Stack.Screen name="Tab" component={Tabs} />
    </Stack.Navigator>
  );
};

export default drawers;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontFamily: 'Mulish-Bold',
  },
  caption: {
    fontSize: 13,
    lineHeight: 14,
    fontFamily: 'Mulish-Medium',
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
    fontFamily: 'Mulish-Bold',
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
