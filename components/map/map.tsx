import { Fontisto } from '@expo/vector-icons';
import * as React from 'react';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { useMarkerPressed } from '../../hooks/marker-pressed';
import { useMapNavigation } from '../../hooks/use-map-navigation';
import { markers } from './map-data';
import { MapMarkers } from './map-markers';

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

export const MapArea: FC<IMapArea> = ({ region, onRegionChangeComplete }) => {
  const { mapRef, animateToCoordinat } = useMapNavigation();


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
      showsPointsOfInterest={true}
      showsCompass={false}
      zoomControlEnabled={false}
    >
      <MapMarkers />
    </MapView>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
    height: '100%',
  },
});
