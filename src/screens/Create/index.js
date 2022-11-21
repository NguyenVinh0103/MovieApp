import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors, normalize, normalizeHorizontal} from '../../helper';
import {IC_BACK, IC_APPLE, IC_GOOGLE} from '../../assets';
import {Tip} from '../../component'

const Item = [
  {
    id: 1,
    image: IC_APPLE,
  },
  {
    id: 2,
    image: IC_GOOGLE,
  },
];

const renderItem = ({item, index}) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image source={item.image} style={styles.icFlatList} />
    </TouchableOpacity>
  );
};

export const Create = () => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Image source={IC_BACK} style={styles.icBack} resizeMode="contain" />
        <Text style={styles.txtSignUp}>{'Sign Up'}</Text>
      </View>
      <Text style={styles.txtHi}>
        {'Sign up with one of following options'}
      </Text>
      <View>
        <FlatList
          data={Item}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item?.id} ${item?.index}`}
          contentContainerStyle={styles.flatList}
        />
      </View>
      <Tip />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  title: {
    flexDirection: 'row',
    marginTop: normalize(50),
    marginLeft: normalizeHorizontal(20),
    alignItems: 'center',
  },
  txtSignUp: {
    color: colors.TEXT,
    fontSize: normalize(24),
    lineHeight: normalize(28),
    fontWeight: '700',
    marginLeft: normalizeHorizontal(16),
  },
  icBack: {
    height: normalize(20),
    aspectRatio: 1,
  },
  txtHi: {
    color: '#9C9C9C',
    marginTop: normalize(50),
    marginLeft: normalizeHorizontal(20),
  },
  item: {
    width: normalizeHorizontal(160),
    height: normalize(60),
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent:'center',
    alignItems:'center',
    marginTop:normalize(40),
    marginLeft: normalizeHorizontal(10),
    marginRight: normalize(10),
    borderRadius: normalize(12)
  },
  icFlatList: {
    height: normalize(20),
    aspectRatio: 1,
    justifyContent:'center'
  },
  flatList: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
  },
});
