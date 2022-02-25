import * as React from 'react';
import { FC } from 'react';
import { StyleSheet, Image, Pressable } from 'react-native';

interface IListItem {
  onPress: () => void;
}

export const ListItem: FC<IListItem> = (props) => {
  return (
    <Pressable onPress={props.onPress} style={styles.wrapper}>
      {props.children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CBCBCB'
  },
});
