import { useTheme } from '@theme';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { moderateScale } from '../utils/size-matters';
import Box from './box';
import Text from './text';
import TextInput, { TextInputProperties } from './text-input';

type ButtonInputProperties = TextInputProperties & {
  onPress: () => void;
  image: number;
  error?: false | string;
};

const ButtonInput = ({
  error = false,
  image,
  onPress,
  ...rest
}: ButtonInputProperties) => {
  const theme = useTheme();
  return (
    <>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        width={'100%'}
        height={60}
        borderWidth={0}
        borderBottomWidth={1.5}
        borderColor={error ? 'errorBorder' : 'errorDefaultBorder'}
      >
        <Box width={'90%'}>
          <TextInput {...rest} buttonInput />
        </Box>
        <TouchableOpacity
          onPress={onPress}
          style={{
            padding: moderateScale(10),
          }}
        >
          <Image
            source={image}
            style={{
              width: moderateScale(theme.spacing.l),
              height: moderateScale(theme.spacing.l),
            }}
          />
        </TouchableOpacity>
      </Box>
      {error && (
        <Text variant={'labelSm'} color={'errorText'} marginVertical={'ms'}>
          {error}
        </Text>
      )}
    </>
  );
};

export default ButtonInput;
