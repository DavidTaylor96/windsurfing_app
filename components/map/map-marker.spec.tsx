import { Fontisto } from '@expo/vector-icons';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { MapMarkers } from './map-markers';
describe('Room', () => {
  it(`Map markers component`, () => {
    jest.mock('./map-data');
    const mockMarkerData = require('./map-data');
    const pressEvent = jest.fn();

    const mapMarker = renderer.create(
      <MapMarkers animateToCoordinat={pressEvent} marker={mockMarkerData}>
        <Fontisto name="map-marker-alt" size={29} color="#bf0f2b" />
      </MapMarkers>
    );
    mapMarker.root.props.animateToCoordinat();
    expect(pressEvent).toHaveBeenCalledTimes(1);
    expect(mapMarker.root.children.length).toBe(1);
    expect(mapMarker).toMatchSnapshot();
  });


  it(`on animate to coordinats`, () => {

    jest.mock('./map-data');
    const mockMarkerData = require('./map-data');

    const animateToCoordinat = jest.fn( () => {
      return {
        latitude: mockMarkerData.latitude,
        longitude: mockMarkerData.longitude,
      };
    });
    
    expect(animateToCoordinat()).toEqual({ latitude: mockMarkerData.latitude, longitude: mockMarkerData.longitude });

  })
});
