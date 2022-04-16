import { Fontisto } from '@expo/vector-icons';
import React, { FC } from 'react';
import { Marker } from 'react-native-maps';
import { useMarkerPressed } from '../../hooks/marker-pressed';
import { IMarker } from './map-data';

interface IMapMarkersProps {
  animateToCoordinat: (coordinate: {
    latitude: number;
    longitude: number;
  }) => void;
  marker: IMarker;
}

export const MapMarkers: FC<IMapMarkersProps> = ({
  animateToCoordinat,
  marker,
}) => {
  const { pressed, setPressed } = useMarkerPressed();

  const onAnimateToCoordinat = (coordinate: {
    latitude: number;
    longitude: number;
  }) => {
    animateToCoordinat(coordinate);
    setPressed(!pressed);
  };

  return (
    <Marker
      onPress={() => onAnimateToCoordinat(marker)}
      key={marker?.id}
      identifier={marker?.id}
      coordinate={{
        latitude: marker?.latitude,
        longitude: marker?.longitude,
      }}
      title={marker?.title}
    >
      <Fontisto name="map-marker-alt" size={29} color="#bf0f2b" />
    </Marker>
  );
};
