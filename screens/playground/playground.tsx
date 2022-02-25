import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from '../../components/list-item/list-item';
import { Text, View } from '../../components/Themed';

export const Playground = () => {
  return (
    <View style={styles.wrapper}>


      <ListItem onPress={() => alert('batman')}>
        <Text weight="h3">FindHorn</Text>
      </ListItem>

    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },

  spacer: {
    height: 10,
  },
});
