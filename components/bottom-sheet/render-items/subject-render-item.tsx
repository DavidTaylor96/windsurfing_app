import { MotiView } from 'moti';
import React from 'react';
import { ListIcon } from '../../list-icon/list-icons';
import { ListItem } from '../../list-item/list-item';
import { Column } from '../../placement-component/placement-component';
import { Text } from '../../Themed/Themed';
import { IData } from '../bottom-sheet-type';

export const SubjectRenderItem = (item: {item: IData}) => {
  const onPress = () => {
    if (item.item.SectionList.onPress)
      item.item.SectionList.onPress(item.item);
  };

  return (
    <MotiView
      from={{ translateX: 0 }}
      transition={{ type: 'timing', duration: 450 }}
    >
      <ListItem onPress={onPress}>
        <ListIcon icon="map-pin" />
        <Column>
          <Text weight="h3">{item.item.title}</Text>
          <Text weight="h4" style={{ color: '#AAAAAA' }}>
            {item.item.description}
          </Text>
        </Column>
      </ListItem>
    </MotiView>
  );
};
