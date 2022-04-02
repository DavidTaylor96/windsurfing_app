import { Fontisto } from '@expo/vector-icons';
import * as React from 'react';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { useMapNavigation } from '../../hooks/use-map-navigation';

export interface IMapRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface IMapArea {
  region: Region;
  onRegionChangeComplete: (region: IMapRegion) => void;
}

const markers = [
  {
    id: '123',
    latitude: 55.953251,
    longitude: -3.188267,
    title: 'one',
    description: 'something new',
  },
  {
    id: '124',
    latitude: 55.853251,
    longitude: -2.488267,
    title: 'two',
    description: 'something new',
  },
  {
    id: '125',
    latitude: 55.753251,
    longitude: -2.588267,
    title: 'Three',
    description: 'something new',
  },
];

export const MapArea: FC<IMapArea> = (({ region, onRegionChangeComplete}) => {


  const {mapRef, animateToCoordinat } = useMapNavigation();

  React.useEffect(() => {
    if (mapRef?.current) {
      mapRef?.current.fitToSuppliedMarkers(markers.map(({ id }) => id));
    }
  }, [markers]);


  return (
    <MapView
      ref={mapRef}
      style={styles.wrapper}
      region={region}
      onRegionChangeComplete={onRegionChangeComplete}
      showsUserLocation={true}
    >
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
        >
          <Fontisto name="map-marker-alt" size={29} color="#bf0f2b" />
        </Marker>
      ))}
    </MapView>
  );
});

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    height: '100%',
  },
});
