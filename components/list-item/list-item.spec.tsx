import * as React from 'react';
import renderer from 'react-test-renderer';
import { ListItem } from './list-item';
import { Text } from '../Themed'


it(`List Item`, () => {

  const pressEvent = jest.fn();

  const listItem = renderer.create(
      <ListItem onPress={pressEvent}>
        <Text>Text</Text>
      </ListItem>

  );


  listItem.root.props.onPress();
  
  expect(pressEvent).toHaveBeenCalledTimes(1);
  expect(listItem.root.children.length).toBe(1)
  expect(listItem).toMatchSnapshot();
});
