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
import {Tip} from '../../component';

import LinearGradient from 'react-native-linear-gradient';

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

export const Create = placeHolder => {
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
      <Text style={styles.txtTitle}>{'Name'}</Text>
      <Tip />
      <Text style={styles.txtTitle}>{'Email'}</Text>
      <Tip />
      <Text style={styles.txtTitle}>{'Password'}</Text>
      <Tip placeHolder="enter your password" />
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.btnStart}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          colors={['rgba(255, 114, 42, 0.5)', '#FF722A']}
          style={styles.linearGradient}>
          <Text style={styles.txtSignIn}>{'Create Account'}</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.txtBottom}>
        {'Already have an account? '}
        <Text style={styles.txtLogin}>{'Login'}</Text>
      </Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(40),
    marginLeft: normalizeHorizontal(10),
    marginRight: normalize(10),
    borderRadius: normalize(12),
  },
  icFlatList: {
    height: normalize(20),
    aspectRatio: 1,
    justifyContent: 'center',
  },
  flatList: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtTitle: {
    color: colors.TEXT,
    fontSize: normalize(18),
    lineHeight: normalize(22),
    fontWeight: '700',
    marginTop: normalize(16),
    marginLeft: normalizeHorizontal(20),
  },
  linearGradient: {
    width: '90%',
    height: normalize(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(12),
  },
  btnStart: {
    width: '90%',
    height: normalize(50),
    bottom: 0,
    marginBottom: normalize(120),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtSignIn: {
    color: colors.TEXT,
    fontSize: normalize(18),
    fontWeight: '700',
    lineHeight: normalize(20),
    letterSpacing: 1,
  },
  txtBottom: {
    color: '#9C9C9C',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    marginBottom: normalize(60),
    fontWeight: '700',
    fontSize: normalize(18),
  },
  txtLogin: {
    color: colors.TEXT,
  },
});
