import React from 'react';
import { Box, Layout, Text } from '@ui';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { Children } from '@tp/global';

type AuthLayoutProperties = {
  title: string;
  description: string;
  children: Children;
};

const AuthLayout = ({ title, description, children }: AuthLayoutProperties) => {
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
        {children}
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default AuthLayout;
