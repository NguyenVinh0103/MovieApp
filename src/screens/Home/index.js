import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {colors, normalize, normalizeHorizontal, width} from '../../helper';
import {
  IC_BACK,
  IC_MICRO,
  IMG_PRODUCT1,
  IMG_PRODUCT2,
  IMG_NEW1,
  IMG_NEW2,
  IMG_NEW3,
} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {Onboarding} from '../../component';

const Item = [
  {
    id: 1,
    image: IMG_PRODUCT1,
    name: 'Squid game',
  },
  {
    id: 2,
    image: IMG_PRODUCT2,
    name: 'The marksman',
  },
];

const Item2 = [
  {
    id: 1,
    image2: IMG_NEW1,
    name2: 'Black widow',
  },
  {
    id: 2,
    image2: IMG_NEW2,
    name2: 'Without remorse',
  },
  {
    id: 3,
    image2: IMG_NEW3,
    name2: 'The misfits',
  },
];

const renderItem = ({item, index}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image
        source={item.image}
        resizeMode="contain"
        style={styles.imgProduct}
      />
      <Text style={styles.txtProduct}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const renderItem2 = ({item, index}) => {
  return (
    <TouchableOpacity style={styles.item2}>
      <Image
        source={item?.image2}
        resizeMode="contain"
        style={styles.imgProduct2}
      />
      <Text style={styles.txtProduct2}>{item?.name2}</Text>
    </TouchableOpacity>
  );
};

export const Home = () => {
  const [search, setSearch] = useState('');

  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView
      enableAutomaticScroll={true}
      contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.search}>
          <TextInput
            style={styles.tipSearch}
            placeholder="Search in the app"
            onChangeText={text => setSearch(text)}
            placeholderTextColor="#fff"
          />
          <View style={styles.icTIP}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Interesting')}
              style={styles.Search}>
              <Image
                source={IC_BACK}
                style={styles.icSearch}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.micro}>
              <Image
                source={IC_MICRO}
                style={styles.icMicro}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <Onboarding />
        <Text style={styles.txtMostPopular}>{'Most Popular'}</Text>
        <View>
          <FlatList
            data={Item.filter(Item =>
              Item.name.toLowerCase().includes(search.toLowerCase()),
            )}
            contentContainerStyle={styles.FlatList}
            keyExtractor={(item, index) => `${item?.id} ${item?.index}`}
            renderItem={renderItem}
          />
        </View>
        <Text style={styles.txtNew}>{'New'}</Text>
        <View>
          <FlatList
            data={Item2.filter(Item2 =>
              Item2.name2.toLowerCase().includes(search.toLowerCase()),
            )}
            contentContainerStyle={styles.FlatList2}
            keyExtractor={(item, index) => `${item?.id} ${item?.index}`}
            renderItem={renderItem2}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    height: '150%',
  },
  container: {
    height: '100%',
    backgroundColor: colors.BACKGROUND,
  },
  search: {
    justifyContent: 'center',
    marginTop: normalize(40),
  },
  tipSearch: {
    width: '90%',
    backgroundColor: '#1A1A1A',
    alignSelf: 'center',
    borderRadius: 22,
    paddingLeft: normalizeHorizontal(60),
    color: '#fff',
  },
  icTIP: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
  },
  Search: {
    marginLeft: normalizeHorizontal(40),
  },
  icSearch: {
    height: normalize(20),
    aspectRatio: 1,
  },
  icMicro: {
    height: normalize(30),
    aspectRatio: 1,
  },
  micro: {
    marginLeft: normalizeHorizontal(250),
  },
  txtMostPopular: {
    fontSize: normalize(20),
    color: colors.TEXT,
    lineHeight: normalize(18),
    fontWeight: '500',
    marginLeft: normalizeHorizontal(20),
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlatList: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  imgProduct: {
    height: normalize(200),
    aspectRatio: 1,
    marginTop: normalize(8),
  },
  txtProduct: {
    fontSize: normalize(16),
    color: colors.TEXT,
    lineHeight: normalize(18),
    fontWeight: '500',
    marginTop: normalize(10),
  },
  txtNew: {
    marginTop: normalize(20),
    fontSize: normalize(20),
    color: colors.TEXT,
    lineHeight: normalize(18),
    fontWeight: '500',
    marginLeft: normalizeHorizontal(20),
  },
  item2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlatList2: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  imgProduct2: {
    height: normalize(170),
    aspectRatio: 1,
    marginTop: normalize(20),
  },
  txtProduct2: {
    fontSize: normalize(16),
    color: colors.TEXT,
    lineHeight: normalize(18),
    fontWeight: '500',
    marginTop: normalize(10),
  },
});
