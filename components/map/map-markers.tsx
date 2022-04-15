import { Fontisto } from '@expo/vector-icons';
import React, { FC } from 'react';
import { Marker } from 'react-native-maps';
import { useMarkerPressed } from '../../hooks/marker-pressed';
import { useMapNavigation } from '../../hooks/use-map-navigation';
import { markers } from './map-data';

interface IMapMarkersProps {}

export const MapMarkers: FC<IMapMarkersProps> = ({}) => {

  const { pressed, setPressed } = useMarkerPressed();

  const {animateToCoordinat } = useMapNavigation();
  return (
    <>
      {markers.map((marker) => (
        <Marker
          onPress={() => {
            animateToCoordinat(marker.latitude, marker.longitude);
            setPressed(!pressed);
          }}
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
    </>
  );
};
