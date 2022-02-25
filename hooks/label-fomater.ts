import { RouteProp, useRoute } from '@react-navigation/native';
import { SectionList } from '../components/bottom-sheet/bottom-sheet';
import { BottomTabParamList } from '../types';

interface IuseFomattedScheduledData {
  textInput: string;
}

type ListDateType = {
  id: string;
  location: string;
  region: string;
};

const listData: ListDateType[] = [
  {
    id: '123',
    location: 'FindHorn',
    region: 'Highlands, Scotland',
  },
  {
    id: '1234',

    location: 'Sandend',
    region: 'Highlands, Scotland',
  },
  {
    id: '1235',

    location: 'Thurso',
    region: 'Highlands, Scotland',
  },
  {
    id: '1236',

    location: 'Durness',
    region: 'Highlands, Scotland',
  },
];

export const useFomattedScheduledData = (props: IuseFomattedScheduledData) => {

  const SectionListAssessments = {
    get assessments(): SectionList[] {
      if (!listData) return [];

      const subjectGrouping: SectionList[] = [
        { title: 'Assessments', data: [] },
      ];

      const listSubjectsFilter = props.textInput
        ? listData?.filter((listItem) =>
            listItem?.location
              ?.toLowerCase()
              .includes(props.textInput.toLowerCase())
          )
        : listData;

      for (const subjectInfo of listSubjectsFilter) {
        subjectGrouping[0].data.push({
          _id: subjectInfo.id,
          title: subjectInfo.location,
          description: subjectInfo.region,
        });
      }

      return subjectGrouping;
    },
  };

  return {
    assessments: SectionListAssessments.assessments,
  };
};
