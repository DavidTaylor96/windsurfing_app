import * as React from 'react';
import renderer from 'react-test-renderer';
import { Text } from '../Themed/Themed'
import { BottomSheetWrapper } from './bottom-sheet';


it(`Bottom sheet`, () => {


  const bottomSheet = renderer.create(
      <BottomSheetWrapper>
        <Text>children</Text>
      </BottomSheetWrapper>

  );


  expect(bottomSheet.root.children.length).toBe(1)
  expect(bottomSheet).toMatchSnapshot();
});
