/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

 import * as React from 'react';
 import { Pressable, Text as DefaultText, View as DefaultView } from 'react-native';
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import { ThemeStore } from '../store/theme-store';
 
 export function useThemeColor(
   props: { light?: string; dark?: string },
   colorName: keyof typeof Colors.light & keyof typeof Colors.dark
 ) {
   const theme = useColorScheme();
   const colorFromProps = props[theme];
 
   if (colorFromProps) {
     return colorFromProps;
   } else {
     return Colors[theme][colorName];
   }
 }
 
 type ThemeProps = {
   lightColor?: string;
   darkColor?: string;
 
 };
 
 export type FontWeightProps = {
   weight?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
 };
 
 export type ButtonBackgroundColorOptions = 'enabled' | 'disabled' | 'danger' | 'alt';
 
 type BackgroundColorProps = {
   buttonType?: ButtonBackgroundColorOptions;
 };
 
 type ButtonTextProps = {
   textAlign?: 'center' | 'left' | 'right';
 };
 
 export type TextProps = FontWeightProps & ThemeProps & DefaultText['props'];
 export type ViewProps = ThemeProps & DefaultView['props'];
 export type ButtonProps = ButtonTextProps &
   TextProps &
   ThemeProps &
   BackgroundColorProps &
   DefaultView['props'];
 
 export function Text(props: TextProps) {
   const { style, lightColor, darkColor, ...otherProps } = props;
 
   const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
 
   let fontSize = 14;
   let fontWeight:
     | 'normal'
     | 'bold'
     | '100'
     | '200'
     | '300'
     | '400'
     | '500'
     | '600'
     | '700'
     | '800'
     | '900' = '400';
 
   let fontFamily:
    | 'Poppins-Bold'
    | 'Poppins-SemiBold'
    | 'Poppins-Medium'
    | 'Poppins-Thin'
    | 'Poppins-Light'
 
   switch (props.weight) {
     case 'normal':
       fontSize = 16;
       fontFamily = 'Poppins-Medium'
       break;
 
     case 'h1':
       fontSize = 24;
       fontWeight = '500';
       fontFamily = 'Poppins-Medium'
 
       break;
     case 'h2':
       fontSize = 20;
       fontWeight = '500';
       fontFamily = 'Poppins-Medium'
       break;
 
     case 'h3':
       fontSize = 18;
       fontWeight = '500';
       fontFamily = 'Poppins-Medium'
       break;
 
     case 'h4':
       fontSize = 18;
       fontWeight = '400';
       fontFamily = 'Poppins-Light'
       break;
     case 'p':
       fontSize = 14;
       fontWeight = '400';
       fontFamily = 'Poppins-Light'
       break;
 
     default:
       fontSize = 14;
       fontWeight = '500';
       fontFamily = 'Poppins-Medium'
   }
 
   return (
     <DefaultText
       style={[{ fontSize, fontWeight, fontFamily}, { color }, style]}
       {...otherProps}
     />
   );
 }
 
 export function View(props: ViewProps) {
   const { style, lightColor, darkColor, ...otherProps } = props;
   const backgroundColor = useThemeColor(
     { light: lightColor, dark: lightColor },
     'background'
   );
 
   return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
 }
 
 export function Button({
   style,
   lightColor,
   darkColor,
   children,
   weight,
   buttonType,
   textAlign,
   ...otherProps
 }: ButtonProps) {
   const getButtonColor = () => {
     switch (buttonType) {
       case 'enabled':
         return ThemeStore.interpreterPrimaryColor;
       case 'disabled':
         return ThemeStore.greyColor
       case 'danger':
         return ThemeStore.redWarningColor;
       case 'alt':
         return ThemeStore.buttonTextColor
     }
   };
 
   const getTextAlign = () => {
     switch (textAlign) {
       case 'left':
         return 'flex-start';
       case 'right':
         return 'flex-end';
       default:
         return 'center';
     }
   };
 
   const getTextColor = () => {
     switch (buttonType) {
       case 'alt':
         return ThemeStore.greyColor;
       default:
         return ThemeStore.backgroundColor;
     }
   };
 
   return (
     <Pressable
       style={[
         {
           borderRadius: 6,
           backgroundColor: getButtonColor(),
           justifyContent: 'center',
           alignItems: getTextAlign(),
           paddingTop: 10,
           paddingBottom: 10,
           paddingLeft: 30,
           paddingRight: 30,
         },
         style,
       ]}
       {...otherProps}
     >
       <Text
         weight={weight ? weight : 'h4'}
         lightColor={getTextColor()}
       >
         {children}
       </Text>
     </Pressable>
   );
 }
 