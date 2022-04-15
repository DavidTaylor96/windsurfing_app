import * as React from 'react';
import renderer from 'react-test-renderer';
import { ListIcon } from './list-icons';

it(`List Icons`, () => {
  const listIcons = renderer.create(<ListIcon icon="map-pin" />);

  expect(listIcons).toMatchSnapshot();
});
