import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Navigator from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $primaryOrange: '#D57A66',
  $primaryGreen: '#00BD9D',
  $primaryPurple: '#9E768F',
  $white: '#ffffff',
  $border: '#e2e2e2',
  $inputText: '#797979',
  $lightGrey: '#f0f0f0',
  $darkText: '#343434',
  /*outline: 1,*/
});

export default () => <Navigator />;
