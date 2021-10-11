import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height} = Dimensions.get('window');

const dataPlaces = [
  {
    id: 1,
    namePlace: 'Trường Đại học FPT TP. HCM',
    infoPlace:
      'Lô E2a-7, Đường D1, Khu Công Nghệ Cao, Long Thạnh Mỹ, Hồ Chí Minh, 700000, Việt Nam',
    distance: 0.5,
    latitude: 10.8414833,
    longitude: 106.810045,
  },
  {
    id: 2,
    namePlace: 'Nhà Văn Hóa Lao Động',
    infoPlace:
      'Lô S-VH đường D1, Khu Công Nghệ Cao, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh, Việt Nam',
    distance: 0.7,
    latitude: 10.843736825216567,
    longitude: 106.8069764311132,
  },
  {
    id: 3,
    namePlace:
      'Vườn Ươm Doanh Nghiệp Công Nghệ Cao (Saigon Hi-tech Park Incubation Center)',
    infoPlace:
      'Lô E2a-10 Đường, D2b Khu Công Nghệ Cao, TP. Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam',
    distance: 0.3,
    latitude: 10.840762297015052,
    longitude: 106.812703736826,
  },
  {
    id: 4,
    namePlace: 'Trường Đại học Nguyễn Tất Thành - Cơ sở Quận 9',
    infoPlace:
      'Đường Võ Chí Công, Long Thạnh Mỹ, Quận 9, Thành phố Hồ Chí Minh, Việt Nam',
    distance: 0.4,
    latitude: 10.838522,
    longitude: 106.810655,
  },
  {
    id: 5,
    namePlace: 'FPT Software Hồ Chí Minh',
    infoPlace:
      'Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh 715650, Việt Nam',
    distance: 0.8,
    latitude: 10.850995381224262,
    longitude: 106.79821626910581,
  },
];

const Place = ({navigation}) => {
  return (
    <View style={styles.bodyContainer}>
      <FlatList
        data={dataPlaces}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Map', {data: dataPlaces});
            }}>
            <View style={styles.cartContainer}>
              <View style={styles.imageContainer}>
                <View style={styles.imageItem}>
                  <Image source={require('../assets/RectangleRemoveBg.png')} />
                </View>
                <Text style={styles.textItem}>{item.distance} km</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.namePlace} numberOfLines={1}>
                  {item.namePlace}
                </Text>
                <Text style={styles.infoPlace} numberOfLines={2}>
                  {item.infoPlace}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bodyContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: '#F2F2F2',
    // eslint-disable-next-line no-dupe-keys
    paddingVertical: 20,
    paddingBottom: 60,
  },
  cartContainer: {
    marginVertical: 5,
    width: '100%',
    height: height * 0.17,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    shadowOpacity: 0.8,
    shadowOffset: {
      height: 0,
      width: 5,
    },
    shadowColor: 'rgba(0, 64, 128, 0.04)',
    shadowRadius: 10,
  },
  imageContainer: {
    width: 'auto',
    height: 'auto',
    flexDirection: 'column',
  },
  imageItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textItem: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF9966',
    flexWrap: 'nowrap',
  },
  textContainer: {
    marginLeft: 20,
    flex: 1,
  },
  namePlace: {
    color: '#1DA1F2',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoPlace: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default Place;
