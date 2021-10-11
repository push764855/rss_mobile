import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapContent}>
        <View style={styles.items}>
          <View style={styles.date}>
            <Text style={styles.dateText}>21/04/2021</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.contentText}>Vinmart</Text>
            <Text style={styles.contentText}>Tiền : -15,000</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapContent: {
    width: '100%',
    height: 50,
    direction: 'ltr',
    flex: 1,
    flexDirection: 'column',
  },
  items: {
    backgroundColor: 'white',
    width: '93%',
    height: '15%',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 8,
  },
  date: {
    flex: 1,
    borderBottomWidth: 0.5,
    borderBottomColor: '#BDBDBD',
    alignContent: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dateText: {
    fontSize: 20,
    marginLeft: 20,
    fontFamily: 'Mulish-Bold',
  },
  contentText: {
    fontSize: 16,
    marginLeft: 20,
    fontFamily: 'Mulish-SemiBold',
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
});
