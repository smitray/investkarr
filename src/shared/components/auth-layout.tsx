import React from 'react';
import { Box, Button, Layout, Text } from '@ui';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Children } from '@tp/global';

type AuthLayoutProperties = {
  title: string;
  description: string;
  children: Children;
  label: string;
  onPress: () => void;
  disabled: boolean;
};

const AuthLayout = ({
  title,
  description,
  children,
  label,
  onPress,
  disabled = false,
}: AuthLayoutProperties) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={60}
    >
      <Layout padding="ml">
        <Box flex={2} justifyContent="center" alignItems={'center'}>
          <Text variant="obTitle" textAlign="center" color="textBlack">
            {title}
          </Text>
          <Text
            variant={'authDescription'}
            color={'textLight'}
            textAlign={'center'}
            marginVertical={'ms'}
          >
            {description.replace(/\\n/g, '\n')}
          </Text>
        </Box>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Box flex={4} alignItems={'center'}>
            {children}
          </Box>
        </TouchableWithoutFeedback>
        <Box flex={1}>
          <Button label={label} onPress={onPress} disabled={disabled} />
        </Box>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default AuthLayout;
