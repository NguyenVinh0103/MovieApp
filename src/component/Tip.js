import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, normalize, normalizeHorizontal} from '../helper';
import {TextInput} from 'react-native-gesture-handler';

const TipComp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txtTitle}>{'Name'}</Text>
      <TextInput
        style={styles.tip}
        placeholder="Enter your name"
        placeholderTextColor={'#9C9C9C'}
      />
    </View>
  );
};

export const Tip = React.memo(TipComp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtTitle: {
    color: colors.TEXT,
    fontSize: normalize(18),
    lineHeight: normalize(22),
    fontWeight: '700',
    marginTop: normalize(16),
    marginLeft: normalizeHorizontal(20),
  },
  tip: {
    width: '90%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(16),
    borderRadius: normalize(12),
    paddingLeft: normalizeHorizontal(20),
  },
});
