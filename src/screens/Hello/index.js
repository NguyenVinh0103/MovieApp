import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, height, normalize, normalizeHorizontal} from '../../helper/';
import {IC_Play} from '../../assets';
import {useNavigation} from '@react-navigation/native';

export const Hello = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Create')}
        style={styles.content}>
        <Text style={styles.txtContent}>{'Movie'}</Text>
        <Image
          source={IC_Play}
          style={styles.imgContent}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Create')}
        style={styles.btnStart}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          colors={['rgba(255, 114, 42, 0.5)', '#rgba(255, 114, 42, 1)']}
          style={styles.linearGradient}>
          <Text style={styles.txtSignIn}>{'Get started'}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  txtContent: {
    color: colors.TEXT,
    fontSize: normalize(50),
    fontWeight: '700',
    lineHeight: normalize(60),
    letterSpacing: 1,
  },
  imgContent: {
    height: normalize(50),
    aspectRatio: 1,
    marginLeft: normalizeHorizontal(10),
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
    marginBottom: normalize(100),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtSignIn: {
    color: colors.TEXT,
    fontSize: normalize(18),
    fontWeight: '700',
    lineHeight: normalize(20),
    letterSpacing: 1,
  },
});
