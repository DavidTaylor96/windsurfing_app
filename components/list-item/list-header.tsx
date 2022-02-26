import * as React from 'react';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../Themed';

interface IListHeader {}

export const ListHeader: FC<IListHeader> = (props) => {
  return (
    <View style={styles.header}>
      <Text weight="h1">{props.children}</Text>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingVertical: 10,
  },

  underline: {
    height: 2,
    width: 40,
    backgroundColor: '#F401F2',
    marginTop: 3,
  },
});
