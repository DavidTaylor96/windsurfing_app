import { BottomSheetTextInputProps } from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheetTextInput/types';

export interface IData {
  _id: string;
  title: string;
  description: string;
}

export type SectionList = {
  title: string;
  data: Array<IData>;
};

// export interface IBottomSheet {
//   TextInputOptions: BottomSheetTextInputProps;
//   SectionList: {
//     data: SectionList[];
//     onPress: (item: IData) => void;
//   };
// }
