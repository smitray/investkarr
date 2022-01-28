import React from 'react';
import { TouchableOpacity } from 'react-native';
import Box from './box';
import Text from './text';

type LinkType = {
  type: 'login' | 'signup';
  onPress: () => void;
};

const AuthBottomAlterLink = ({ onPress, type }: LinkType) => {
  return (
    <>
      <Box
        flex={type === 'login' ? 0.5 : 0.7}
        alignItems="center"
        justifyContent="center"
        marginTop={type === 'login' ? 'xxl' : 'o'}
      >
        <TouchableOpacity {...{ onPress }} style={{ flex: 1 }}>
          {type === 'login' && (
            <Text variant="authAlterLinkBase" textTransform="capitalize">
              don&apos;t have an account?{' '}
              <Text variant="authAlterSpan" color={'primary'}>
                Signup
              </Text>
            </Text>
          )}
          {type === 'signup' && (
            <Text variant="authAlterLinkBase" textTransform="capitalize">
              already have an account?{' '}
              <Text variant="authAlterSpan" color={'primary'}>
                Login
              </Text>
            </Text>
          )}
        </TouchableOpacity>
      </Box>
    </>
  );
};

export default AuthBottomAlterLink;
