import React from 'react';
import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { Children } from '@tp/global';
import Text from './text';
import { SCREEN_WIDTH } from '@utils';
import Box from './box';

type ButtonProperties = {
  label: string;
  variant?: 'primary' | 'secondary';
  onPress: () => void;
  children?: Children;
  disabled?: true | false;
  style?: ViewStyle;
  widthType?: 'one' | 'two' | number;
};

/**
 * TODO: Button with icon
 */

const styles = StyleSheet.create({
  secondary: {
    shadowColor: '#121010',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 2,
  },
});

const Button = ({
  label,
  variant = 'primary',
  onPress,
  children,
  disabled = false,
  widthType = 'one',
  style,
}: ButtonProperties) => {
  let widthValue: number;
  if (widthType === 'one') {
    widthValue = SCREEN_WIDTH - 40;
  } else if (widthType === 'two') {
    widthValue = Math.round((SCREEN_WIDTH - 55) / 2);
  } else {
    widthValue = widthType;
  }

  const handlePress = () => {
    if (disabled) return;
    onPress();
  };

  return (
    <TouchableOpacity
      delayPressIn={10}
      {...{ onPress: handlePress, disabled }}
      style={[{ width: widthValue, height: 48 }, style]}
    >
      <Box
        flex={1}
        borderRadius="m"
        backgroundColor={variant === 'primary' ? 'primary' : 'white'}
        justifyContent="center"
        alignItems="center"
        opacity={disabled ? 0.4 : 1}
        style={variant === 'secondary' && styles.secondary}
      >
        {children ? (
          children
        ) : (
          <Text
            variant="buttonLabel"
            color={variant === 'primary' ? 'white' : 'primary'}
          >
            {label}
          </Text>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
