import { Fontisto } from '@expo/vector-icons';
import React, { FC } from 'react';
import { Marker } from 'react-native-maps';
import { useMarkerPressed } from '../../hooks/marker-pressed';
import { IMarker } from './map-data';

interface IMapMarkersProps {
  animateToCoordinat: (coordinate?: {
    latitude: number;
    longitude: number;
  }) => void;
  marker: IMarker;
}

export const MapMarkers: FC<IMapMarkersProps> = ({
  animateToCoordinat,
  marker,
  children,
}) => {

  return (
    <Marker
      onPress={() =>  animateToCoordinat(marker)}
      key={marker?.id}
      identifier={marker?.id}
      coordinate={{
        latitude: marker?.latitude,
        longitude: marker?.longitude,
      }}
      title={marker?.title}
    >
      {children}
    </Marker>
  );
};
