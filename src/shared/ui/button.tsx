import React from 'react';
import {
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  Image,
} from 'react-native';
import { Children } from '@tp/global';
import Text from './text';
import { SCREEN_WIDTH } from '@utils';
import Box from './box';

type ButtonProperties = {
  label: string;
  variant?: 'primary' | 'secondary' | 'apple';
  onPress: () => void;
  children?: Children;
  disabled?: true | false;
  style?: ViewStyle;
  widthType?: 'one' | 'two' | number;
  imageSource?: number;
  imageStyle?: ImageStyle;
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
  imageSource,
  imageStyle,
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
        flexDirection="row"
        borderRadius="m"
        backgroundColor={
          variant === 'primary'
            ? 'primary'
            : variant === 'apple'
            ? 'appleButton'
            : 'white'
        }
        justifyContent="center"
        alignItems="center"
        opacity={disabled ? 0.4 : 1}
        style={variant === 'secondary' && styles.secondary}
      >
        {children ? (
          children
        ) : (
          <>
            {imageSource && (
              <Image
                source={imageSource}
                resizeMode="contain"
                style={imageStyle}
              />
            )}
            <Text
              variant="buttonLabel"
              color={variant === 'secondary' ? 'primary' : 'white'}
            >
              {label}
            </Text>
          </>
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
