import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FC } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, { Camera, Marker, Region } from 'react-native-maps';
import { INavigation } from '../../types';

interface IMapArea {
  region: Region;
}

const markers = [
  {
    id: '123',
    latitude: 55.953251,
    longitude: -3.188267,
    title: 'hello',
    description: 'something new',
  },
  {
    id: '124',
    latitude: 55.853251,
    longitude: -2.488267,
    title: 'hello',
    description: 'something new',
  },
  {
    id: '125',
    latitude: 55.753251,
    longitude: -2.588267,
    title: 'hello',
    description: 'something new',
  },
];

export const MapArea: FC<IMapArea> = ({ region, children }) => {
  const mapRef = React.useRef<MapView>(null);
  // const navigation = useNavigation<INavigation>();

  const animateToCoordinat = (lat: number, long: number ) => {
    mapRef.current?.animateCamera({
      center: {
        latitude: lat,
        longitude: long,
      },
    });
  }
  React.useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToSuppliedMarkers(markers.map(({ id }) => id));
    }
  }, [markers]);

  return (
    <MapView ref={mapRef} style={styles.wrapper} region={region}>
      {markers.map((marker) => (
        <Marker
          onPress={() => animateToCoordinat(marker.latitude, marker.longitude)}
          key={marker.id}
          identifier={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude,
          }}
          title={marker.title}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    height: '100%',
  },
});
