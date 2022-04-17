import BottomSheet from '@gorhom/bottom-sheet';
import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useMapNavigation } from '../../hooks/use-map/use-map-navigation';

interface IBottomSheet {}

export const BottomSheetWrapper: FC<IBottomSheet> = ({ children }) => {
  const { snapPoints, sheetRef } = useMapNavigation();

  return (
    <BottomSheet
      snapPoints={snapPoints}
      ref={sheetRef}
      style={styles.bottomSheet}
    >
      {children}
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  bottomSheet: {
    marginTop: 100,
  },
});
