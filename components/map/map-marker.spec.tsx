import { Fontisto } from '@expo/vector-icons';
import * as React from 'react';
import renderer from 'react-test-renderer';
import { MapMarkers } from './map-markers';


  it(`Map markers component`, () => {

    jest.mock('./map-data');

    const mockMarkerData = require('./map-data');

    const pressEvent = jest.fn();

    const goToMarker = jest.fn(() => {
      pressEvent();
    })

    const mapMarker = renderer.create(
      <MapMarkers goToMarker={pressEvent} marker={mockMarkerData}>
        <Fontisto name="map-marker-alt" size={29} color="#bf0f2b" />
      </MapMarkers>
    );


    mapMarker.root.props.goToMarker();

    expect(goToMarker).toEqual(expect.any(Function));


    expect(pressEvent).toHaveBeenCalledTimes(1);
    expect(mapMarker.root.children.length).toBe(1);
    expect(mapMarker).toMatchSnapshot();
  });
