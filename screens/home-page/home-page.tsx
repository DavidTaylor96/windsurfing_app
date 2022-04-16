import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button } from '../../components/buttons/button';
import { Icon } from '../../components/icons/icons';
import { MapArea } from '../../components/map/map';
import { View, Text } from '../../components/Themed/Themed';
import { useFomattedScheduledData } from '../../hooks/label-fomater';
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
});
