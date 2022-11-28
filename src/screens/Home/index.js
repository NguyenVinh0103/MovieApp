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
import {IC_BACK, IC_MICRO, IC_SEARCH} from '../../assets';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

import {Onboarding} from '../../component'

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          style={styles.tipSearch}
          placeholder="Search in the app"
          placeholderTextColor="#fff"
        />
        <View style={styles.icTIP}>
          <TouchableOpacity style={styles.Search}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  search: {
    justifyContent: 'center',
    marginTop: normalize(80),
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
});
