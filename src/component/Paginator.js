import {
  StyleSheet,
  View,
  useWindowDimensions,
  Image,
  Animated,
} from 'react-native';
import React from 'react';
import {colors, normalize, normalizeHorizontal} from '../helper';

export default Paginator = ({data, scrollX}) => {
  const {width} = useWindowDimensions();

  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: normalize(32),
    justifyContent: 'center',
    marginTop: normalize(20),
  },
  dot: {
    height: normalize(10),
    borderRadius: normalize(100) / 2,
    backgroundColor: '#fff',
    marginHorizontal: normalizeHorizontal(8),
  },
});
