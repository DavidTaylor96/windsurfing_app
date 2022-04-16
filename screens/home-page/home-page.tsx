import { Feather } from '@expo/vector-icons';
import BottomSheet, {
  BottomSheetSectionList,
  BottomSheetTextInput,
} from '@gorhom/bottom-sheet';
import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { RenderFeedHeader } from '../../components/bottom-sheet/render-header/render-feed-header';
import { SubjectInfoItem } from '../../components/bottom-sheet/render-items/subject-info-item';
import { SubjectRenderItem } from '../../components/bottom-sheet/render-items/subject-render-item';
import { Button } from '../../components/buttons/button';
import { Icon } from '../../components/icons/icons';
import { MapArea } from '../../components/map/map';
import { View, Text } from '../../components/Themed/Themed';
import { useFomattedScheduledData } from '../../hooks/label-fomater';
import { useMarkerPressed } from '../../hooks/marker-pressed';
import { useMapNavigation } from '../../hooks/use-map-navigation';
import useDefaultSafeView from '../../hooks/useDefaultSafeView';

export default function HomeScreen() {
  const insets = useDefaultSafeView();

  const { data } = useFomattedScheduledData({});

  const {
    onRegionChangeComplete,
    chosenLocation,
    onChange,
    chosenLocationText,
    goToLocation,
    getUserLocatoin,
    sheetRef,
    snapPoints,
  } = useMapNavigation();

  const { pressed } = useMarkerPressed();

  return (
    <View style={styles.wrapper}>
      <MapArea
        onRegionChangeComplete={onRegionChangeComplete}
        region={chosenLocation}
      />
      <Button onPress={getUserLocatoin}>
        <Icon icon="navigation" />
      </Button>

      <BottomSheet
        snapPoints={snapPoints}
        ref={sheetRef}
        style={styles.bottomSheet}
      >
        <View style={styles.inputWrapper}>
          <Icon icon="search" size={16} color={'#AAA'} style={styles.icon} />
          <BottomSheetTextInput
            placeholder={'Search for a location'}
            value={chosenLocationText}
            clearButtonMode={'while-editing'}
            onChangeText={onChange}
            onSubmitEditing={goToLocation}
            style={styles.input}
          />
        </View>
        <BottomSheetSectionList
          renderSectionHeader={RenderFeedHeader}
          sections={data}
          stickySectionHeadersEnabled={true}
          keyExtractor={(i) => i._id}
          renderItem={pressed ? SubjectRenderItem : SubjectInfoItem}
        />
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomSheet: {
    marginTop: 100,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 6,
  },

  input: {
    fontSize: 16,
    paddingLeft: 5,
    flex: 1,
  },

  icon: {
    paddingLeft: 5
  }
});
