import React, { FC } from 'react';
import { Pressable } from 'react-native';
import useDefaultSafeView from '../../hooks/useDefaultSafeView';

interface IIconButtonProps {
  onPress: () => void;
}

export const IconButton: FC<IIconButtonProps> = ({ children, onPress }) => {
  const inset = useDefaultSafeView();
  return (
    <Pressable
      style={{
        position: 'absolute',
        top: inset.top,
        right: 12,
        padding: 8,
        borderRadius: 8,
        backgroundColor: 'white',
      }}
      onPress={onPress}
    >
      {children}
    </Pressable>
  );
};
