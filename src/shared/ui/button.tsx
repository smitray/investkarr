import React from 'react';
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler';
import { Children } from '@tp/global';
import { useTheme } from '@theme';
import Text from './text';

type ButtonProperties = {
  label: string;
  variant?: 'primary' | 'secondary';
  onPress: () => void;
  children?: Children;
  disabled?: true | false;
  style?: RectButtonProperties['style'];
};

/**
 * TODO: Button width type
 * TODO: Button shadow for secondary
 */

const Button = ({
  label,
  variant = 'primary',
  onPress,
  children,
  disabled = false,
  style,
}: ButtonProperties) => {
  const theme = useTheme();
  return (
    <RectButton
      onPress={() => {
        if (!disabled) onPress();
      }}
      style={[
        {
          borderRadius: theme.borderRadii.m,
          width: 160,
          height: 48,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:
            variant === 'primary' ? theme.colors.primary : theme.colors.white,
          opacity: disabled ? 0.4 : 1,
        },
        style,
      ]}
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
    </RectButton>
  );
};

export default React.memo(Button);
