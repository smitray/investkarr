import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@theme';
import Text from './text';
import { moderateScale } from '../utils/size-matters';

type RecoveryLinkProperties = {
  onPress: () => void;
  title: string;
  center?: boolean;
};

const RecoveryLink = ({ title, onPress, center }: RecoveryLinkProperties) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      style={{
        width: '100%',
        paddingVertical: moderateScale(theme.spacing.m),
        marginTop: center
          ? moderateScale(theme.spacing.xs)
          : moderateScale(theme.spacing.s),
      }}
      onPress={onPress}
    >
      <Text
        variant={'step'}
        color={'textLight'}
        textAlign={center ? 'center' : 'right'}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default RecoveryLink;
