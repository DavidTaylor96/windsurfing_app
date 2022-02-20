
import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { View, Text } from '../../components/Themed';
import useDefaultSafeView from '../../hooks/useDefaultSafeView';

export default function HomeScreen() {
  const insets = useDefaultSafeView();

  return (
    <View style={[styles.wrapper, { paddingTop: insets.top }]}>
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
