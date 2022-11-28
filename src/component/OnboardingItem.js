import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  useWindowDimensions,
  Image,
} from 'react-native';
import React from 'react';
import {colors, normalize, normalizeHorizontal} from '../helper';
import {Onboarding} from './onboarding';

export default OnboardingItem = ({item}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
      <Image
        source={item.image}
        style={[styles.image, {width, resizeMode: 'contain'}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: normalize(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: normalize(220),
    alignSelf: 'center',
    marginTop: normalize(20),
    aspectRatio: 2,
  },
});
