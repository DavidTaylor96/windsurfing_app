import React, { FC } from 'react';
import { Marker } from 'react-native-maps';
import { IMarker } from './map-data';

interface IMapMarkersProps {
  goToMarker: (marker: IMarker) => void;
  marker: IMarker;
}

export const MapMarkers: FC<IMapMarkersProps> = ({
  goToMarker,
  marker,
  children,
}) => {

  const onGoToMarker = () => {
    goToMarker(marker);
  };

  return (
    <Marker
      onPress={onGoToMarker}
      key={marker.id}
      identifier={marker.id}
      coordinate={{
        latitude: marker.latitude,
        longitude: marker.longitude,
      }}
      title={marker.title}
    >
      {children}
    </Marker>
  );
};
