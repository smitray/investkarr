import React from 'react';
import { Box, Button, Text } from '@ui';
import { useTheme } from '@theme';
import { Platform } from 'react-native';

export type SocialButtonDataType = {
  key: string;
  variant: 'primary' | 'secondary' | 'apple';
  label: string;
  onPress: () => void;
  image: number;
};

type SocialButtonsProperties = {
  type: 'login' | 'signup';
  data: Array<SocialButtonDataType>;
  onPress?: () => void;
};

const SocialButtons = ({
  type,
  data,
  onPress = () => {},
}: SocialButtonsProperties) => {
  const theme = useTheme();

  const ORView = () => (
    <Box
      width={'100%'}
      flexDirection="row"
      alignItems="center"
      marginVertical="xl"
      paddingHorizontal="l"
    >
      <Box
        flex={1}
        flexDirection="row"
        height={0.5}
        backgroundColor="orBorder"
      />
      <Text variant={'labelSm'} color={'orColor'} marginHorizontal={'ml'}>
        or
      </Text>
      <Box
        flex={1}
        flexDirection="row"
        height={0.5}
        backgroundColor="orBorder"
      />
    </Box>
  );

  const SocialButtonsView = () => (
    <>
      {data.map((button) => {
        if (button.variant === 'apple' && Platform.OS !== 'ios') {
          return;
        }
        return (
          <Button
            key={button.key}
            variant={button.variant}
            label={button.label}
            onPress={button.onPress}
            style={{ marginVertical: theme.spacing.s }}
            imageSource={button.image}
            imageStyle={{
              width: theme.spacing.ml,
              height: theme.spacing.ml,
              marginRight: theme.spacing.ml,
            }}
          />
        );
      })}
    </>
  );
  return (
    <Box flex={2} alignItems="center">
      <SocialButtonsView />
      {type === 'login' && (
        <>
          <ORView />
          <Button
            variant="primary"
            label="Login with Phone"
            onPress={onPress}
            style={{ marginVertical: theme.spacing.s }}
            imageSource={require('@assets/images/phone-fill.png')}
            imageStyle={{
              width: theme.spacing.ml,
              height: theme.spacing.ml,
              marginRight: theme.spacing.ml,
            }}
          />
        </>
      )}
    </Box>
  );
};

export default React.memo(SocialButtons);
