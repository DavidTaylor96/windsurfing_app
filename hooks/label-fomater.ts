import { RouteProp, useRoute } from '@react-navigation/native';
import { IData, SectionList } from '../components/bottom-sheet/bottom-sheet';
import { BottomTabParamList } from '../types';

interface IuseFomattedScheduledData {
  textInput: string;
}

const listData: IData[] = [
  {
    _id: '123',
    title: 'FindHorn',
    description: 'Highlands, Scotland',
  },
  {
    _id: '1234',
    title: 'Sandend',
    description: 'Highlands, Scotland',
  },
  {
    _id: '1235',
    title: 'Thurso',
    description: 'Highlands, Scotland',
  },
  {
    _id: '1236',
    title: 'Durness',
    description: 'Highlands, Scotland',
  },
];

export const useFomattedScheduledData = (props: IuseFomattedScheduledData) => {
  const SectionList = {
    get data(): SectionList[] {
      if (!listData) return [];

      const subjectGrouping: SectionList[] = [{ title: 'Places near you', data: [] }];

      const listSubjectsFilter = props.textInput
        ? listData?.filter((listItem) =>
            listItem?.title
              ?.toLowerCase()
              .includes(props.textInput.toLowerCase())
          )
        : listData;


        

      for (const subjectInfo of listSubjectsFilter) {


        subjectGrouping[0].data.push({
          _id: subjectInfo._id,
          title: subjectInfo.title,
          description: subjectInfo.description,
        });
      }


      return subjectGrouping;
    },
  };

  return {
    data: SectionList.data,
  };
};
