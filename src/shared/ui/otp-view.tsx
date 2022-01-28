import { useTheme } from '@theme';
import { moderateScale, SCREEN_WIDTH } from '@utils';
import React from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Text from './text';
import ResendOTP from './resend-otp';

type OTPViewProperties = {
  cellCount: 4 | 6;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
};

const OTPView = ({ cellCount, setValue, value }: OTPViewProperties) => {
  const theme = useTheme();

  const reference = useBlurOnFulfill({ value, cellCount: cellCount });
  const [properties, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({
    index,
    symbol,
    isFocused,
  }: {
    index: number;
    symbol: unknown;
    isFocused: boolean;
  }) => {
    let textChild;

    if (symbol) {
      textChild = '•';
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <Text
        key={index}
        style={{
          width: moderateScale(34),
          height: moderateScale(48),
          fontSize: 20,
          lineHeight: moderateScale(48),
          borderWidth: 0.5,
          borderRadius: 6,
          borderColor: theme.colors.transparentBorder,
          textAlign: 'center',
          backgroundColor: theme.colors.white,
        }}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {textChild}
      </Text>
    );
  };

  return (
    <>
      <CodeField
        ref={reference}
        {...properties}
        value={value}
        onChangeText={(dt: string) => setValue(dt)}
        cellCount={cellCount}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        rootStyle={{
          width:
            cellCount === 6
              ? SCREEN_WIDTH - moderateScale(100)
              : SCREEN_WIDTH - moderateScale(200),
        }}
        renderCell={renderCell}
      />
      {cellCount === 6 && <ResendOTP />}
    </>
  );
};

export default OTPView;
