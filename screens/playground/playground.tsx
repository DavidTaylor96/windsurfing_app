import * as React from 'react';
import { StyleSheet } from 'react-native';
import { BottomSheetSearchListComponent } from '../../components/bottom-sheet/bottom-sheet';
import { View } from '../../components/Themed';
import { useFomattedScheduledData } from '../../hooks/label-fomater';

export const Playground = () => {
  const [textInput, setTextInput] = React.useState<string>('');

  const { assessments } = useFomattedScheduledData({
    textInput: textInput,
  });

  const onChange = (value: string) => {
    setTextInput(value);
  };

  const snapPoints = React.useMemo(() => ['20%', '30%', '55%'], []);

  const onPress = () => {
    alert('batman');
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.bottomSheetWrapper}>
        <BottomSheetSearchListComponent
          SectionList={{ data: assessments, onPress }}
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
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  bottomSheetWrapper: {
    marginTop: 100,
    flex: 1,
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
