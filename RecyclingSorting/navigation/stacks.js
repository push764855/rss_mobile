/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/index';
import PlaceScreen from '../screens/Place';
// import MapScreen from '../screens/map';
import TransactionScreen from '../screens/transaction';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
// import QRCodeScreen from '../screens/qrCode';

const Stack = createNativeStackNavigator();

function HomeScreenNavigator({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#51B26D',
          opacity: 0.89,
        },
        headerTitleStyle: {
          fontFamily: 'Montserrat-Bold',
          color: 'white',
          fontSize: 22,
          alignSelf: 'center',
        },
        headerLeft: () => (
          <Button
            icon={<Icon name="user" size={20} color="white" />}
            onPress={() => navigation.toggleDrawer()}
            color="#fffff"
            buttonStyle={{
              backgroundColor: '#51B26D',
              marginLeft: 15,
              width: 40,
            }}
          />
        ),
        headerRight: () => (
          <Button
            // eslint-disable-next-line no-alert
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
      }}>
      <Stack.Screen name="Quét mã" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export {HomeScreenNavigator};

const PlaceScreenNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Địa điểm"
        component={PlaceScreen}
        options={{
          headerStyle: {
            backgroundColor: '#51B26D',
            opacity: 0.89,
          },
          headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
            color: 'white',
            fontSize: 22,
            alignSelf: 'center',
          },
          headerLeft: () => (
            <Button
              icon={<Icon name="user" size={20} color="white" />}
              onPress={() => navigation.toggleDrawer()}
              color="#fffff"
              buttonStyle={{
                backgroundColor: '#51B26D',
                marginLeft: 15,
                width: 40,
              }}
            />
          ),
          headerRight: () => (
            <Button
              // eslint-disable-next-line no-alert
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      {/* <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarVisible: false,
        }}
      /> */}
    </Stack.Navigator>
  );
};

export {PlaceScreenNavigator};

function TransactionScreenNavigator({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#51B26D',
          opacity: 0.89,
        },
        headerTitleStyle: {
          fontFamily: 'Montserrat-Bold',
          color: 'white',
          fontSize: 22,
          alignSelf: 'center',
        },
        headerLeft: () => (
          <Button
            icon={<Icon name="user" size={20} color="white" />}
            onPress={() => navigation.toggleDrawer()}
            color="#fffff"
            buttonStyle={{
              backgroundColor: '#51B26D',
              marginLeft: 15,
              width: 40,
            }}
          />
        ),
        headerRight: () => (
          <Button
            // eslint-disable-next-line no-alert
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
      }}>
      <Stack.Screen name="Lịch Sử Giao dịch" component={TransactionScreen} />
    </Stack.Navigator>
  );
}

export {TransactionScreenNavigator};

// const QRCodeScreenNavigator = ({navigation}) => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Quét Mã"
//         component={QRCodeScreen}
//         options={{
//           headerStyle: {
//             backgroundColor: '#51B26D',
//             opacity: 0.89,
//           },
//           headerTitleStyle: {
//             fontFamily: 'Montserrat-Bold',
//             color: 'white',
//             fontSize: 22,
//             alignSelf: 'center',
//           },
//           headerLeft: () => (
//             <Button
//               icon={<Icon name="user" size={20} color="white" />}
//               onPress={() => navigation.toggleDrawer()}
//               color="#fffff"
//               buttonStyle={{
//                 backgroundColor: '#51B26D',
//                 marginLeft: 15,
//                 width: 40,
//               }}
//             />
//           ),
//           headerRight: () => (
//             <Button
//               onPress={() => alert('This is a button!')}
//               title="Info"
//               color="#fff"
//             />
//           ),
//         }}
//       />
//       {/* <Stack.Screen
//         name="Map"
//         component={MapScreen}
//         options={{
//           headerShown: false,
//           tabBarVisible: false,
//         }}
//       /> */}
//     </Stack.Navigator>
//   );
// };

// export {QRCodeScreenNavigator};
