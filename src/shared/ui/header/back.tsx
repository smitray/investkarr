import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';
import { moderateScale } from '@utils';

const Back = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={navigation.goBack}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Image
        source={require('@assets/images/back.png')}
        style={{ width: moderateScale(6), height: moderateScale(12) }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default React.memo(Back);
