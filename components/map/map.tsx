import { Fontisto } from '@expo/vector-icons';
import * as React from 'react';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Region } from 'react-native-maps';
import { useMarkerPressed } from '../../hooks/marker-pressed';
import { useMapNavigation } from '../../hooks/use-map/use-map-navigation';
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
  const { mapRef, zoomInOnMarker } = useMapNavigation();

  const { pressed, setPressed } = useMarkerPressed();

  const onZoomIntoMarker = (latitude: number, longitude: number) => {
    zoomInOnMarker(latitude, longitude);
    setPressed(!pressed);
  };


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
      {markers.map((marker, index) => (
        <MapMarkers
          key={index}
          goToMarker={() => onZoomIntoMarker(marker.latitude, marker.longitude)}
          marker={marker}
        >
          <Fontisto name="map-marker-alt" size={29} color="#bf0f2b" />
        </MapMarkers>
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
