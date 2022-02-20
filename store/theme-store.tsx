import { TextStyle } from 'react-native';
import { Store } from '../store/base-store';


export interface ITheme {
    backgroundColor: string;
    //Green 
    userPrimaryColor: string;
    darkerGreenColor: string;
    // Blue
    interpreterPrimaryColor: string;
    //  Red 
    redWarningColor: string;
    // Grey 
    greyColor: string;
    lightGreyColor: string;
    extraLightGreyColor: string;
    borderColor: string;
    textColor: string;
    buttonTextColor: string;
    videoCallBackground: string;
    videoCallDetailsBackground: string;
    warningColor: string;
    subHeaderLightGreyColor: string
    // Border Radius 
    defaultBorderRadius: number;
}

export const ThemeStore: ITheme = Store<ITheme>({
    backgroundColor: 'white',
    userPrimaryColor: '#34c759',
    darkerGreenColor: '#789c1a',
    interpreterPrimaryColor: '#39ABE0',
    redWarningColor: 'red',
    greyColor: 'dimgrey',
    lightGreyColor: '#939393',
    extraLightGreyColor: 'lightgrey',
    subHeaderLightGreyColor: 'rgb(240, 239, 244)',
    borderColor: '#EEEEEE',
    textColor: '#1A1A1A',
    buttonTextColor: 'white',
    videoCallBackground: '#222831',
    videoCallDetailsBackground: '#30475e',
    warningColor: '#ffbf00',

    defaultBorderRadius: 5,
})
    // .mock({
    //     backgroundColor: 'black',
    //     userPrimaryColor: 'lightblue',
    //     interpreterPrimaryColor: 'lightgreen',
    //     redWarningColor: 'violet',
    //     greyColor: 'navy',
    //     borderColor: 'pink',
    //     textColor: 'white',
    //     buttonTextColor: 'black',
    //     videoCallBackground: '#222831',
    //     videoCallDetailsBackground: '#30475e',
    //     warningColor: '#ffbf00',
    // });


