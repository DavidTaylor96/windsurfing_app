import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ListIcon } from '../../components/list-icons';
import { ListItem } from '../../components/list-item/list-item';
import {
  Column,
  Row,
} from '../../components/placement-component/placement-component';
import { Text, View } from '../../components/Themed';

type ListDateType = {
  location: string;
  region: string;
};

export const Playground = () => {
  const listData: ListDateType[] = [
    {
      location: 'FindHorn',
      region: 'Highlands, Scotland',
    },
    {
      location: 'FindHorn',
      region: 'Highlands, Scotland',
    },
    {
      location: 'FindHorn',
      region: 'Highlands, Scotland',
    },
    {
      location: 'FindHorn',
      region: 'Highlands, Scotland',
    },
  ];

  return (
    <View style={styles.wrapper}>
      {listData.map((location, index) => (
        <ListItem onPress={() => alert('batman')} key={index}>
          <ListIcon icon="map-pin" />
          <Column>
            <Text weight="h3">{location.location}</Text>
            <Text weight="h4" style={{ color: '#AAAAAA' }}>
              {location.region}
            </Text>
          </Column>
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  spacer: {
    height: 10,
  },
});
