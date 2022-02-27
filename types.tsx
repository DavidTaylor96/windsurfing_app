/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { StackNavigationProp } from '@react-navigation/stack';


 export type INavigation = 
 StackNavigationProp<RootStackParamList>;

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Playground: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
