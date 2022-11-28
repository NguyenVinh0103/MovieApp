import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {colors, normalize, normalizeHorizontal, width} from '../../helper';
import {
  IC_BACK,
  IC_MICRO,
  IC_SEARCH,
  IC_PLUS,
  IMG_ITEM1,
  IMG_ITEM2,
  IMG_ITEM3,
  IMG_ITEM4,
  IC_NEXT,
} from '../../assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Item = [
  {
    id: 1,
    image: IC_PLUS,
    text: 'Romance',
  },

  {
    id: 2,
    image: IC_PLUS,
    text: 'Comedy',
  },

  {
    id: 3,
    image: IC_PLUS,
    text: 'Action',
  },

  {
    id: 4,
    image: IC_PLUS,
    text: 'Science fiction',
  },
];

const Item2 = [
  {
    id: 1,
    images: IMG_ITEM1,
    text2: 'Tom Cruise',
  },

  {
    id: 2,
    images: IMG_ITEM2,
    text2: 'Robert Downey',
  },

  {
    id: 3,
    images: IMG_ITEM3,
    text2: 'Emma Stone',
  },

  {
    id: 4,
    images: IMG_ITEM4,
    text2: 'Ryan Reynolds',
  },
];

const renderItem = ({item, index}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.txtItem}>{item?.text}</Text>
      <TouchableOpacity style={styles.btnIC}>
        <Image
          source={item?.image}
          resizeMode="contain"
          style={styles.icItem}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const renderItem2 = ({item, index}) => {
  return (
    <View style={styles.item2}>
      <TouchableOpacity style={styles.btnImg}>
        <Image
          source={item?.images}
          resizeMode="contain"
          style={styles.imgItem}
        />
        <Text style={styles.txtItem2}>{item?.text2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Interesting = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={IC_BACK} style={styles.icBack} resizeMode="contain" />
      <View style={styles.Content}>
        <Text style={styles.txtContent}>{'What are you interested in ?'}</Text>
        <Text style={styles.txtHello}>
          {'select some topics to follow to personaliz your experince.'}
        </Text>
      </View>
      <View style={styles.search}>
        <TextInput
          style={styles.tipSearch}
          placeholder="Search"
          placeholderTextColor="#fff"
        />
        <View style={styles.icTIP}>
          <TouchableOpacity style={styles.Search}>
            <Image
              source={IC_SEARCH}
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
      <Text style={styles.txtPoupular}>{'Poupular categories'}</Text>
      <View>
        <FlatList
          data={Item}
          keyExtractor={(item, index) => `${item?.id} ${item?.index}`}
          renderItem={renderItem}
          contentContainerStyle={styles.FlatList}
          numColumns={2}
          horizontal={false}
        />
      </View>
      <Text style={styles.txtActors}> {'Poupular actors'}</Text>
      <View>
        <FlatList
          data={Item2}
          keyExtractor={(item, index) => `${item?.id} ${item?.index}`}
          renderItem={renderItem2}
          contentContainerStyle={styles.FlatList2}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.next}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          colors={['#FF722A', 'rgba(255, 114, 42, 1)']}
          style={styles.linearGradient}>
          <Image source={IC_NEXT} style={styles.icNEXT} resizeMode="contain" />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  icBack: {
    height: normalize(20),
    aspectRatio: 1,
    marginTop: normalize(50),
    marginLeft: normalizeHorizontal(20),
  },
  Content: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  txtContent: {
    color: colors.TEXT,
    fontSize: normalize(20),
    fontWeight: '900',
    lineHeight: normalize(18),
    letterSpacing: 0.2,
    marginTop: normalize(10),
  },
  txtHello: {
    color: '#9C9C9C',
    fontSize: normalize(14),
    fontWeight: '400',
    lineHeight: normalize(18),
    letterSpacing: 0.2,
    marginTop: normalize(10),
    width: normalizeHorizontal(350),
    textAlign: 'center',
  },
  search: {
    justifyContent: 'center',
    marginTop: normalize(20),
  },
  tipSearch: {
    width: '90%',
    backgroundColor: '#1A1A1A',
    alignSelf: 'center',
    borderRadius: normalize(22),
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
    height: normalize(30),
    aspectRatio: 1,
  },
  icMicro: {
    height: normalize(30),
    aspectRatio: 1,
  },
  micro: {
    marginLeft: normalizeHorizontal(250),
  },
  txtPoupular: {
    color: colors.TEXT,
    fontSize: normalize(20),
    fontWeight: '900',
    lineHeight: normalize(18),
    letterSpacing: 0.2,
    marginTop: normalize(20),
    marginLeft: normalizeHorizontal(20),
  },
  item: {
    backgroundColor: '#1A1A1A',
    width: normalize(180),
    aspectRatio: 4,
    borderRadius: normalize(18),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    margin: normalize(10),
  },
  txtItem: {
    color: colors.TEXT,
    fontWeight: '500',
    fontSize: normalize(18),
    lineHeight: normalize(18),
    marginLeft: normalizeHorizontal(10),
  },
  icItem: {
    width: normalize(20),
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalizeHorizontal(10),
  },
  btnIC: {
    marginTop: normalize(6),
  },
  FlatList: {
    alignSelf: 'center',
    marginTop: normalize(20),
  },
  FlatList2: {
    flexDirection: 'row',
    marginTop: normalize(20),
  },
  txtActors: {
    color: colors.TEXT,
    fontSize: normalize(20),
    fontWeight: '900',
    lineHeight: normalize(18),
    letterSpacing: 0.2,
    marginTop: normalize(20),
    marginLeft: normalizeHorizontal(20),
  },
  item2: {
    marginLeft: normalizeHorizontal(24),
    marginTop: normalize(20),
  },
  imgItem: {
    height: normalize(80),
    aspectRatio: 1,
  },
  txtItem2: {
    color: colors.TEXT,
    fontWeight: '500',
    fontSize: normalize(12),
    lineHeight: normalize(18),
    marginTop: normalize(16),
  },
  btnImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  next: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 0,
    marginBottom: normalize(60),
    marginRight: normalizeHorizontal(40),
    width: normalize(80),
    aspectRatio: 1,
    borderRadius: normalize(100) / 2,
  },
  linearGradient: {
    width: normalize(80),
    aspectRatio: 1,
    borderRadius: normalize(100) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icNEXT: {
    height: normalize(60),
    aspectRatio: 1,
  },
});
