import React from 'react';
import { Box, Button, Layout, Text } from '@ui';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { Children } from '@tp/global';
import { moderateScale, SCREEN_WIDTH } from '@utils';
import { useSignupStore } from '@store';

type AuthLayoutProperties = {
  title: string;
  description: string;
  subDescription?: string;
  children: Children;
  label: string;
  onPress: () => void;
  disabled: boolean;
  isSignupBar?: boolean;
};

const AuthLayout = ({
  title,
  description,
  subDescription,
  children,
  label,
  onPress,
  disabled = false,
  isSignupBar = false,
}: AuthLayoutProperties) => {
  const count = useSignupStore((state) => state.count);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={60}
    >
      {isSignupBar && (
        <Box
          height={moderateScale(2)}
          backgroundColor={'lighterPrimary'}
          width={SCREEN_WIDTH}
        >
          <Box
            height={moderateScale(2)}
            backgroundColor={'primary'}
            width={(SCREEN_WIDTH / 6) * count}
          />
        </Box>
      )}
      <Layout padding="ml">
        <ScrollView>
          <Box
            flex={2}
            justifyContent="center"
            alignItems={'center'}
            paddingBottom={'ms'}
          >
            <Text variant="obTitle" textAlign="center" color="textBlack">
              {title}
            </Text>
            <Text
              variant={'authDescription'}
              color={'textLight'}
              textAlign={'center'}
              marginTop={'ms'}
            >
              {description.replace(/\\n/g, '\n')}
            </Text>
            {subDescription && (
              <Text
                variant={'authSubDescription'}
                color={'textMedium'}
                textAlign={'center'}
                marginTop={'s'}
              >
                {subDescription}
              </Text>
            )}
          </Box>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Box flex={3} alignItems={'center'}>
              {children}
            </Box>
          </TouchableWithoutFeedback>
          <Box flex={1}>
            <Button label={label} onPress={onPress} disabled={disabled} />
          </Box>
        </ScrollView>
      </Layout>
    </KeyboardAvoidingView>
  );
};

export default AuthLayout;
