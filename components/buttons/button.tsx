import React, { FC } from 'react';
import { Pressable } from 'react-native';
import useDefaultSafeView from '../../hooks/useDefaultSafeView';

interface IButtonProps {
  onPress: () => void;
}

export const Button: FC<IButtonProps> = ({ children, onPress }) => {

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
