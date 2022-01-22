import React from 'react';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useTheme } from '@theme';
import { moderateScale } from '@utils';
import { TextInputProps } from 'react-native';
import Box from './box';
import Text from './text';

type TextInputProperties = TextInputProps & {
  label: string;
  errorMessage?: string | false;
};

const TextInput = ({
  label,
  errorMessage = false,
  ...rest
}: TextInputProperties) => {
  const theme = useTheme();
  return (
    <Box width={'100%'} marginVertical={'s'}>
      <FloatingLabelInput
        label={label}
        hint={label}
        {...rest}
        labelStyles={{
          paddingLeft: 0,
          marginLeft: -5,
        }}
        inputStyles={{
          color: theme.colors.textMedium,
          ...theme.textVariants.body1,
          marginTop: moderateScale(theme.spacing.ml),
        }}
        customLabelStyles={{
          colorBlurred: theme.colors.textLight,
          colorFocused: theme.colors.textLight,
          fontSizeFocused: 12,
          fontSizeBlurred: 16,
        }}
        containerStyles={{
          borderWidth: 0,
          borderBottomWidth: 1.5,
          height: 60,
          borderColor: errorMessage
            ? theme.colors.errorBorder
            : theme.colors.errorDefaultBorder,
        }}
      />
      {errorMessage && (
        <Text variant={'labelSm'} color={'errorText'} marginVertical={'ms'}>
          {errorMessage}
        </Text>
      )}
    </Box>
  );
};

export default TextInput;
