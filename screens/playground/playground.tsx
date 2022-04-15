import * as React from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheetSearchListComponent } from '../../components/bottom-sheet/bottom-sheet';
import { Button } from '../../components/buttons/button';
import { Icon } from '../../components/icons';
import { MapArea } from '../../components/map/map';
import { View } from '../../components/Themed';
import { useFomattedScheduledData } from '../../hooks/label-fomater';
import { useMapNavigation } from '../../hooks/use-map-navigation';

export const Playground = () => {
  const { data } = useFomattedScheduledData({});

  const {
    onRegionChangeComplete,
    chosenLocation,
    onChange,
    chosenLocationText,
    goToLocation,
    onPress,
    getUserLocatoin,
    sheetRef,
  } = useMapNavigation();

  return (
    <View style={styles.wrapper}>
      <MapArea
        onRegionChangeComplete={onRegionChangeComplete}
        region={chosenLocation}
      />

      <Button onPress={getUserLocatoin}>
        <Icon icon="navigation" />
      </Button>
      <BottomSheetSearchListComponent
        SectionList={{ data: data, onPress }}
        TextInputOptions={{
          placeholder: 'Search for a location',
          value: chosenLocationText,
          clearButtonMode: 'while-editing',
          onChangeText: onChange,
          style: styles.input,
          onSubmitEditing: goToLocation,
        }}
        ref={sheetRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },

  bottomSheetWrapper: {
    marginTop: 100,
  },
  spacer: {
    height: 10,
  },

  input: {
    borderRadius: 6,
    fontSize: 16,
    marginLeft: 5,
    flex: 1,
  },
});
