import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors, normalize, normalizeHorizontal, width} from '../../helper';
import {IC_BACK, IC_MICRO, IC_SEARCH, IC_PLUS} from '../../assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Item = [
  {
    id: 1,
    image: IC_PLUS
  },

  {
    id: 2,
    image: IC_PLUS
  },

  {
    id: 3,
    image: IC_PLUS
  },
  
  {
    id: 4,
    image: IC_PLUS
  },
];

export const Interesting = () => {
  const insets = useSafeAreaInsets();
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
      <Text style = {styles.txtPoupular}>{'Poupular categories'}</Text>
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
  txtPoupular:{
    color: colors.TEXT,
    fontSize: normalize(20),
    fontWeight: '900',
    lineHeight: normalize(18),
    letterSpacing: 0.2,
    marginTop: normalize(20),
    marginLeft: normalizeHorizontal(20)
  },
});
