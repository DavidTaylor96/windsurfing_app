export interface IMarker {
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  description: string;
}


export const markers: IMarker[] = [
  {
    id: '123',
    latitude: 55.953251,
    longitude: -3.188267,
    title: 'one',
    description: 'something new',
  },
  {
    id: '124',
    latitude: 55.853251,
    longitude: -2.488267,
    title: 'two',
    description: 'something new',
  },
  {
    id: '125',
    latitude: 55.753251,
    longitude: -2.588267,
    title: 'Three',
    description: 'something new',
  },
];
