import * as React from 'react';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

interface IMapArea {
  mapRegion: any;
}

export const MapArea: FC<IMapArea> = (props) => {
  return (
    <MapView style={styles.wrapper} region={props.mapRegion}>
      {props.children}
    </MapView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    height: '100%',
  },
});
