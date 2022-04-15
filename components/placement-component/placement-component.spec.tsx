import * as React from 'react';
import renderer from 'react-test-renderer';
import { Column, Flex, Row } from './placement-component';

it(`Row`, () => {
  const row = renderer.create(<Row />);

  expect(row).toMatchSnapshot();
});
it(`Column`, () => {
  const column = renderer.create(<Column />);

  expect(column).toMatchSnapshot();
});
it(`Flex`, () => {
  const flex = renderer.create(<Flex />);

  expect(flex).toMatchSnapshot();
});
