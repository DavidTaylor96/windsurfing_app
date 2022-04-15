import { Feather } from '@expo/vector-icons';
import React, { FC } from 'react';

export type IconType = keyof typeof Feather.glyphMap;
export interface IIconProps {
  icon: IconType;
  color?: string;
  size?: number;
}

export const Icon: FC<IIconProps> = (props) => {
  return (
    <Feather
      name={props.icon}
      size={props.size ? props.size : 24}
      color={props.color ? props.color : 'black'}
    />
  );
};
