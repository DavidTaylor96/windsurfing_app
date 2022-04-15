import * as React from 'react';
import renderer from 'react-test-renderer';
import { Text, View } from './Themed';

it(`Text H2 test`, () => {
  const tree = renderer
    .create(<Text weight="h2">Snapshot test!</Text>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it(`Text H1 test`, () => {
  const tree = renderer
    .create(<Text weight="h1">Snapshot test!</Text>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it(`Text H3 test`, () => {
  const tree = renderer
    .create(<Text weight="h3">Snapshot test!</Text>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it(`Text H4 test`, () => {
  const tree = renderer
    .create(<Text weight="h4">Snapshot test!</Text>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it(`Text H5 test`, () => {
  const tree = renderer
    .create(<Text weight="h5">Snapshot test!</Text>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
it(`Text P test`, () => {
  const tree = renderer
    .create(<Text>Snapshot test!</Text>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


it(`View`, () => {
  const view = renderer.create(<View />)
  expect(view).toMatchSnapshot();
})
