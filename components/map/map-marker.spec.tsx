import { Fontisto } from '@expo/vector-icons';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { MapMarkers } from './map-markers';


it(`Map markers`, () => {


  const mapMarker = renderer.create(
    <MapMarkers>
      <Fontisto name="map-marker-alt" size={29} color="#bf0f2b" />
    </MapMarkers>
  );

  expect(mapMarker.root.children.length).toBe(3);

  expect(mapMarker).toMatchSnapshot();
});
