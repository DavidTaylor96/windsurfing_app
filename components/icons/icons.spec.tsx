import * as React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from './icons';

it(`Icons`, () => {

  const icon = renderer.create(
    <Icon icon={'activity'} color={'blue'} size={15} />
  );

  expect(icon).toMatchSnapshot();
});
