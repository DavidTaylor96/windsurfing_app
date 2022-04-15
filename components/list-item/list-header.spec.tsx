import * as React from 'react';
import renderer from 'react-test-renderer';
import { ListHeader } from './list-header';

it(`List Headeru`, () => {

  const listHeader = renderer.create(
    <ListHeader>Header</ListHeader>
  );

  expect(listHeader).toMatchSnapshot();
});
