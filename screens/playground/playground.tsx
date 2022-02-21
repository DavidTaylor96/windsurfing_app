import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View, Text } from '../../components/Themed';
import useDefaultSafeView from '../../hooks/useDefaultSafeView';

export const Playground = () => {
  return (
    <View style={styles.wrapper}>
      <Text weight="h1">Hello world</Text>
      <View style={styles.spacer} />
      <Text weight="h2">Hello world</Text>
      <View style={styles.spacer} />
      <Text weight="h3">Hello world</Text>
      <View style={styles.spacer} />
      <Text weight="h4">Hello world</Text>
      <View style={styles.spacer} />
      <Text weight="h5">Hello world</Text>
      <View style={styles.spacer} />
      <Text weight="normal">Hello world</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  spacer: {
    height: 10,
  },
});
