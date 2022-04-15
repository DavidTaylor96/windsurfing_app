import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import renderer from 'react-test-renderer';
import { Icon } from '../icons';
import { Button } from './button';

it(`Button`, () => {
  const mockFunction = jest.fn();

  const button = renderer.create(
    <SafeAreaProvider>
      <Button onPress={mockFunction}>
        <Icon icon="navigation" />
      </Button>
    </SafeAreaProvider>
  );

  button.root.props.children.props.onPress();

  expect(button).toMatchSnapshot();

  expect(mockFunction).toHaveBeenCalledTimes(1);
});
