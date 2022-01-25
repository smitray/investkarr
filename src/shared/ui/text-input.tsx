import React from 'react';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useTheme } from '@theme';
import { moderateScale } from '@utils';
import { TextInputProps } from 'react-native';
import Box from './box';
import Text from './text';
import ErrorMessage from './error-message';

export type TextInputProperties = TextInputProps & {
  label: string;
  isPassword?: boolean;
  togglePassword?: boolean;
  errorMessage?: string | false;
  passwordError?: {
    minEight: boolean;
    oneSpChar: boolean;
    oneUpperCase: boolean;
    oneDigit: boolean;
  };
  phone?: boolean;
  buttonInput?: boolean;
};

const TextInput = ({
  label,
  errorMessage = false,
  isPassword = false,
  togglePassword = false,
  passwordError = {
    minEight: false,
    oneSpChar: false,
    oneUpperCase: false,
    oneDigit: false,
  },
  phone = false,
  buttonInput = false,
  ...rest
}: TextInputProperties) => {
  const theme = useTheme();
  return (
    <Box width={'100%'} marginVertical={'s'}>
      <FloatingLabelInput
        label={label}
        hint={!phone ? label : '+91 9999900000'}
        isPassword={isPassword}
        togglePassword={togglePassword}
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
          borderBottomWidth: buttonInput ? 0 : 1.5,
          height: 60,
          borderColor: errorMessage
            ? theme.colors.errorBorder
            : theme.colors.errorDefaultBorder,
        }}
        customHidePasswordImage={require('@assets/images/hide-password.png')}
        customShowPasswordImage={require('@assets/images/show-password.png')}
      />
      {!isPassword && errorMessage && (
        <Text variant={'labelSm'} color={'errorText'} marginVertical={'ms'}>
          {errorMessage}
        </Text>
      )}
      {isPassword && (
        <Box
          flexDirection={'row'}
          flexWrap={'wrap'}
          justifyContent={'space-evenly'}
        >
          <ErrorMessage
            isError={passwordError.minEight}
            message="8 min. characters"
          />
          <ErrorMessage
            isError={passwordError.oneSpChar}
            message="1 special character (,.@/)"
          />
          <ErrorMessage
            isError={passwordError.oneUpperCase}
            message="1 upper case character (A-Z)"
          />
          <ErrorMessage
            isError={passwordError.oneDigit}
            message="1 digit (0-9)"
          />
        </Box>
      )}
    </Box>
  );
};

export default React.memo(TextInput);
