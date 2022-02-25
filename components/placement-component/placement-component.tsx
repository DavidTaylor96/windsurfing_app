import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../../components/Themed';

export const Row: FC = (props) => {
  return <View style={styles.row}>{props.children}</View>;
};

export const Column: FC = (props) => {
  return <View style={styles.column}>{props.children}</View>;
};

export const Flex = () => {
  return <View style={{ flex: 1 }} />;
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },

  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
  },
});
