import * as React from 'react';
import { Region } from 'react-native-maps';
import renderer from 'react-test-renderer';
import { MapArea } from './map';
import { MapMarkers } from './map-markers';

it(`Map area`, () => {
  const onRegionChange = jest.fn();

  const location: Region = {
    latitude: 55.953251,
    longitude: -3.188267,
    latitudeDelta: 5.5036,
    longitudeDelta: 5.5612,
  };

  const mapArea = renderer.create(
    <MapArea onRegionChangeComplete={onRegionChange} region={location}>
      <MapMarkers />
    </MapArea>
  );

  mapArea.root.props.onRegionChangeComplete();

  expect(mapArea.root.children.length).toBe(1);
  expect(onRegionChange).toHaveBeenCalledTimes(1);
  expect(mapArea).toMatchSnapshot();
});
