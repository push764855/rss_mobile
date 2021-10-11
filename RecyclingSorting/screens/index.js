import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Platform,
} from 'react-native';
import CircleProgress from '../animation/donut';
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'https://10.0.2.2:8080/ws-message';
// const SOCKET_URL = "https://10.0.2.2:8443/ws-message";

export default function App() {
  const [outputs, setOutput] = useState([]);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState('You server message here.');

  let onConnected = () => {
    console.log('Connected!!');
  };

  let onMessageReceived = dto => {
    console.log(outputs);
    let id = outputs.length;
    let found = false;
    outputs.filter(ele => {
      if (ele.label == dto.label) {
        ele.quantity++;
        setOutput([...outputs]);
        setTotal(calTotalPrice(outputs));
        found = true;
      }
    });
    if (!found) {
      dto.id = id;
      setOutput([...outputs, dto]);
      setTotal(calTotalPrice(outputs));
    }
  };

  function calTotalPrice(outputs) {
    let total = 0;
    outputs.forEach(element => {
      total = total + element.quantity * element.price;
    });
    return total;
  }

  return (
    <View style={styles.container}>
      <SockJsClient
        url={SOCKET_URL}
        topics={['/topic/message']}
        onConnect={onConnected}
        onDisconnect={console.log('Disconnected!')}
        onMessage={dto => onMessageReceived(dto)}
        debug={false}
      />
      <View style={styles.processContainer}>
        <View style={styles.processCircle}>
          <CircleProgress />
        </View>
        <View style={styles.textCircle}>
          <Text style={{fontSize: 18, fontFamily: 'Mulish-Bold'}}>
            Máy Đang Quét
          </Text>
          <Text style={{fontSize: 15, fontFamily: 'Mulish-Medium'}}>
            Máy đang tiến hành quét.
          </Text>
          <Text style={{fontSize: 15, fontFamily: 'Mulish-Medium'}}>
            Bạn vui lòng chờ trong giây lát
          </Text>
        </View>
      </View>

      <View style={styles.tableContainer}>
        <View style={styles.tableBody}>
          <View style={styles.listWrapper}>
            <View style={styles.headerTable}>
              <Text style={styles.textHeaderType}>Loại chai</Text>
              <Text style={styles.textHeaderType}>(ml)</Text>
            </View>

            <View style={styles.headerTableQuantity}>
              <Text style={styles.textHeaderQuantity}>Số lượng</Text>
            </View>

            <View style={styles.headerTable}>
              <Text style={styles.textHeaderAmount}>Thành tiền</Text>
              <Text style={styles.textHeaderAmount}>(VND)</Text>
            </View>
          </View>

          <FlatList
            data={outputs}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                <View style={styles.itemDetailType}>
                  <Text style={styles.itemType}>{item.label}</Text>
                </View>
                <View style={styles.itemDetailQuantity}>
                  <Text style={styles.itemQuantity}>{item.quantity}</Text>
                </View>
                <View style={styles.itemDetailPrice}>
                  <Text style={styles.itemAmount}>{item.price}</Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.id.toString()}
          />

          <View style={styles.footerTable}>
            <View style={styles.textFooter}>
              <Text style={styles.totalText}>Tạm tính</Text>
            </View>
            <View style={styles.valueFooter}>
              <Text style={styles.totalValue}>{total}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnFinish}>
        <View style={styles.borderBtn}>
          <TouchableOpacity style={styles.buttonFinish}>
            <Text style={styles.textFinish}> Hoàn tất lượt đổi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 100,
  },
  processContainer: {
    backgroundColor: 'rgba(29, 161, 242, 0.1)',
    margin: 15,
    borderRadius: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '93%',
    height: Platform.OS === 'ios' ? '12%' : '14%',
  },
  processCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 15,
    right: 33,
    marginTop: 5,
  },
  textCircle: {
    marginLeft: -15,
    marginTop: Platform.OS === 'ios' ? 15 : 7,
  },
  tableContainer: {
    height: '50%',
    backgroundColor: 'white',
    width: '92%',
    marginLeft: 13,
    marginRight: 13,
    marginTop: 5,
    borderRadius: 4,
  },
  tableBody: {
    height: '95%',
    margin: 10,
  },
  listWrapper: {
    flexDirection: 'row',
    height: '18%',
  },
  headerTable: {
    width: '35%',
  },
  headerTableQuantity: {
    width: '30%',
  },
  textHeaderType: {
    fontSize: 16,
    fontFamily: 'Mulish-Bold',
    textAlign: 'left',
  },
  textHeaderQuantity: {
    fontSize: 16,
    fontFamily: 'Mulish-Bold',
    textAlign: 'center',
  },
  textHeaderAmount: {
    fontSize: 16,
    fontFamily: 'Mulish-Bold',
    textAlign: 'right',
  },
  listItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 0.3,
  },
  itemDetailType: {
    width: '25%',
    paddingVertical: 10,
  },
  itemDetailQuantity: {
    width: '35%',
    paddingVertical: 10,
  },
  itemDetailPrice: {
    width: '40%',
    paddingVertical: 10,
  },
  itemType: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    width: '80%',
    textAlign: 'center',
  },
  itemQuantity: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    textAlign: 'right',
    width: '95%',
  },
  itemAmount: {
    fontSize: 17,
    fontFamily: 'Mulish-Bold',
    textAlign: 'right',
    width: '95%',
  },
  footerTable: {
    flexDirection: 'row',
    height: '18%',
  },
  textFooter: {
    width: '65%',
    paddingVertical: 15,
  },
  valueFooter: {
    width: '35%',
    paddingVertical: 15,
  },
  totalText: {
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
    textAlign: 'left',
  },
  totalValue: {
    fontSize: 18,
    fontFamily: 'Mulish-Bold',
    textAlign: 'right',
    marginRight: 10,
    color: 'green',
  },
  btnFinish: {
    height: '15%',
    justifyContent: 'center',
    width: '70%',
  },
  borderBtn: {
    backgroundColor: '#BDBDBD',
    width: '100%',
    height: '60%',
    borderRadius: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textFinish: {
    fontFamily: 'Mulish-Bold',
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
});
