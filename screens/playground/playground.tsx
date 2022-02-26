import * as React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { BottomSheetSearchListComponent } from '../../components/bottom-sheet/bottom-sheet';
import { View } from '../../components/Themed';
import { useFomattedScheduledData } from '../../hooks/label-fomater';

export const Playground = () => {
  const [textInput, setTextInput] = React.useState<string>('');

  const { data } = useFomattedScheduledData({
    textInput: textInput,
  });

  const onChange = (value: string) => {
    setTextInput(value);
  };

  const snapPoints = React.useMemo(() => ['35%', '40%', '55%', '80%'], []);

  const onPress = () => {
    alert('batman');
  };

  const [mapRegion, setmapRegion] = React.useState({
    latitude:  55.953251,
    longitude:  -3.188267,
    latitudeDelta: 1.1036,
    longitudeDelta: 1.1612,
  });

  return (
    <View style={styles.wrapper}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker' />
      </MapView>
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
