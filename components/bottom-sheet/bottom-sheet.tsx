import { Feather } from '@expo/vector-icons';
import BottomSheet, {
  BottomSheetSectionList,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import { BottomSheetTextInputProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput/types';
import React, { FC } from 'react';
import { ListIcon } from '../list-icons';
import { ListItem } from '../list-item/list-item';
import { Column } from '../placement-component/placement-component';
import { Text, View } from '../Themed';
import { SectionListData, StyleSheet } from 'react-native';

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
  snapPoints: string[];
  TextInputOptions: BottomSheetTextInputProps;

  SectionList: {
    data: SectionList[];
    onPress: (item: IData) => void;
  };
}

export const BottomSheetSearchListComponent: FC<IBottomSheet> = (props) => {
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


  const RenderFeedHeader = ({ section }: any )  => {

    return (
      <View style={styles.header}>
        <Text weight="h3">{section.title}</Text>
        <View  style={styles.underline} />
      </View>
    );
  };

  return (
    <BottomSheet index={0} snapPoints={props.snapPoints}>
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
};

const styles = StyleSheet.create({
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

  header: {
    backgroundColor: 'white', 
    marginHorizontal: 20, 
    paddingVertical: 10,
  },

  underline: {
    height: 2,
    width: 40, 
    backgroundColor: '#F401F2', 
    marginTop: 3,
  }
});
