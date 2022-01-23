import { moderateScale } from '@utils';
import React from 'react';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      source={require('@assets/images/logo-top.png')}
      style={{ width: moderateScale(32), height: moderateScale(32) }}
      resizeMode="contain"
    />
  );
};

export default Logo;
