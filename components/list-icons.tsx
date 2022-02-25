import { Feather } from '@expo/vector-icons';
import * as React from 'react';
import { FC } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';
import { View } from './Themed';

interface IListIcon {
  icon: keyof typeof Feather.glyphMap;
}

export const ListIcon: FC<IListIcon> = (props) => {
  return (
    <View style={styles.wrapper}>
      <Feather name={props.icon} size={24} color={'black'} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 45,
    width: 45,
    backgroundColor: '#E5E5E5',
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center', 
    marginRight: 10,
  },
});
