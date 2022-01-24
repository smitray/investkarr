import React from 'react';
import { Entypo } from '@expo/vector-icons';
import Box from './box';
import Text from './text';
import { moderateScale } from '../utils/size-matters';
import { useTheme } from '@theme';

type ErrorMessageProperties = {
  message: string;
  isError: boolean;
};
const ErrorMessage = ({ message, isError }: ErrorMessageProperties) => {
  const theme = useTheme();
  return (
    <Box
      flexDirection={'row'}
      height={moderateScale(theme.spacing.ll)}
      borderRadius={'s'}
      backgroundColor={isError ? 'chipError' : 'chipSuccess'}
      alignItems={'center'}
      justifyContent={'space-around'}
      alignSelf={'flex-start'}
      paddingVertical={'xs'}
      paddingHorizontal={'ms'}
      marginTop={'m'}
    >
      <Entypo
        name={isError ? 'cross' : 'check'}
        size={16}
        color={isError ? theme.colors.errorText : theme.colors.primary}
      />
      <Text variant={'chip'} color={isError ? 'errorText' : 'primary'}>
        {message}
      </Text>
    </Box>
  );
};

export default ErrorMessage;
