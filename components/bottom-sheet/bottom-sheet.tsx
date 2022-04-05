import { Feather } from '@expo/vector-icons';
import BottomSheet, {
  BottomSheetSectionList,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import { BottomSheetTextInputProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput/types';
import React, { FC, forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import { useMapNavigation } from '../../hooks/use-map-navigation';
import { ListIcon } from '../list-icons';
import { ListHeader } from '../list-item/list-header';
import { ListItem } from '../list-item/list-item';
import { Column } from '../placement-component/placement-component';
import { Text, View } from '../Themed';

export interface IData {
  _id: string;
  title: string;
  description: string;
}

export type SectionList = {
  title: string;
  data: Array<IData>;
};

interface IBottomSheet {
  TextInputOptions: BottomSheetTextInputProps;
  SectionList: {
    data: SectionList[];
    onPress: (item: IData) => void;
  };
}

export const BottomSheetSearchListComponent =  React.forwardRef<BottomSheet,IBottomSheet>((props, ref) => {
  const { snapPoints } = useMapNavigation();

  const SubjectRenderItem = (item: { item: IData }) => {
    const onPress = () => {
      if (props.SectionList.onPress) props.SectionList.onPress(item.item);
    };

    return (
      <ListItem onPress={onPress}>
        <ListIcon icon="map-pin" />
        <Column>
          <Text weight="h3">{item.item.title}</Text>
          <Text weight="h4" style={{ color: '#AAAAAA' }}>
            {item.item.description}
          </Text>
        </Column>
      </ListItem>
    );
  };

  const RenderFeedHeader = ({ section }: any) => {
    return <ListHeader>{section.title}</ListHeader>;
  };

  return (
    <BottomSheet
      snapPoints={snapPoints}
      ref={ref}
      style={styles.bottomSheet}
    >
      <View style={styles.input}>
        <Feather name="search" size={16} color={'#AAAAAA'} />
        <BottomSheetTextInput {...props.TextInputOptions} />
      </View>
      <BottomSheetSectionList
        renderSectionHeader={RenderFeedHeader}
        sections={props.SectionList.data}
        stickySectionHeadersEnabled={true}
        keyExtractor={(i) => i._id}
        renderItem={SubjectRenderItem}
      />
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  bottomSheet: {
    marginTop: 100,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 10,
    marginHorizontal: 15,
    borderRadius: 6,
    fontSize: 16,
    lineHeight: 20,
    padding: 8,
    borderColor: '#CBCBCB',
    borderWidth: 1,
  },

  searchWrapper: {
    alignItems: 'center',
    marginRight: 5,
  },
});
