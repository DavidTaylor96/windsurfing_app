import * as React from 'react';
import renderer from 'react-test-renderer';
import { useFomattedScheduledData } from '../../hooks/label-fomater';
import { useMapNavigation } from '../../hooks/use-map-navigation';
import { BottomSheetSearchListComponent } from './bottom-sheet';

it(`Bottom sheet`, () => {

  // const {
  //   onChange,
  //   chosenLocationText,
  //   goToLocation,
  //   onPress,
  //   sheetRef,
  // } = useMapNavigation();
  
  // const { data } = useFomattedScheduledData({});

  const PressEvent = jest.fn()

  const mockData = jest.mock('../../hooks/label-fomater', () => {
    return {
      useFomattedScheduledData: () => ''
    }
  })


  const bottomSheet = renderer.create(
    <BottomSheetSearchListComponent
      SectionList={{ data: mockData, PressEvent }}
      // TextInputOptions={{
      //   placeholder: 'Search for a location',
      //   value: chosenLocationText,
      //   clearButtonMode: 'while-editing',
      //   onChangeText: onChange,
      //   onSubmitEditing: goToLocation,
      // }}
      // ref={sheetRef}
    />
  );

  expect(bottomSheet).toMatchSnapshot();
});
