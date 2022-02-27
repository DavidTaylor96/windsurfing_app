import * as React from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheetSearchListComponent } from '../../components/bottom-sheet/bottom-sheet';
import { View } from '../../components/Themed';
import { useFomattedScheduledData } from '../../hooks/label-fomater';
import { MapArea } from '../../components/map/map';
import { Marker } from 'react-native-maps';

export const Playground = () => {
  const [textInput, setTextInput] = React.useState<string>('');

  const { data } = useFomattedScheduledData({
    textInput: textInput,
  });

  const onChange = (value: string) => {
    setTextInput(value);
  };

  const snapPoints = React.useMemo(() => ['35%', '55%', '80%'], []);

  const onPress = () => {
    alert('batman');
  };

  const [mapRegion, setmapRegion] = React.useState({
    latitude: 55.953251,
    longitude: -3.188267,
    latitudeDelta: 1.1036,
    longitudeDelta: 1.1612,
  });

  return (
    <View style={styles.wrapper}>
      <MapArea mapRegion={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker" />
      </MapArea>
      <BottomSheetSearchListComponent
        SectionList={{ data: data, onPress }}
        TextInputOptions={{
          placeholder: 'Search for subject',
          value: textInput,
          clearButtonMode: 'while-editing',
          onChangeText: onChange,
          style: styles.input,
        }}
        snapPoints={snapPoints}
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
