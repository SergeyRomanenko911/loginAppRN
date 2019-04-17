import EStyleSheet from 'react-native-extended-stylesheet';

import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); // , height

// TODO: Read:
// https://github.com/nirsky/react-native-scaling-example

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
// const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

const theme = () => EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!

  // login
  $selectedColor: 'rgb(100, 11, 207)',
  $selectedColorHEX: '#640bcf',

  // Status Bar
  $barColorAndroid: '#008fd5',
  $barColorIOS: '#fff',

  // General
  $menuColor: '#2a3e54',
  $primaryColor: '#008fd5',
  $primaryBackgroundColor: '#fafafa',
  $primaryBackgroundDarkColor: '#f1f1f1',
  $primaryBackgroundNonDefaultColor: 'rgb(233,233,239)',
  $greenBtn: '#03f384',

  // Header
  $headerBackgroundColor: '#FAFAFA',

  // Text
  $textColor: '#ffffff',
  $inputColor: '#000000',
  $placeholderColor: '#b7b7b7',
  $highlightedColor: '#008fd5',
  $linkColor: '#008fd5',
  $errorColor: 'red',

  // Font size
  $text8: moderateScale(8),
  $text10: moderateScale(10),
  $textTag: moderateScale(11),
  $textMin: moderateScale(14),
  $textSmall: moderateScale(16),
  $textDefault: moderateScale(18),
  $textBig: moderateScale(20),
  $textMax: moderateScale(24),

  $textTimer: moderateScale(90),

  // Icon size
  $iconSizeMin: moderateScale(16),
  $iconSizeNormal: moderateScale(20),

  $iconSizeSmall: moderateScale(20),

  // $outline: 1,
});

export default theme;
