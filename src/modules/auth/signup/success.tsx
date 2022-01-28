import React, { useEffect } from 'react';
import { Box, Text, Layout } from '@ui';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';

const Success = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'SignupSuccess'>) => {
  // react native after 30 seconds, navigate to the dummy screen
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Dummy');
    }, 5000);
  }, [navigation]);
  return (
    <Layout padding={'ml'}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant={'successLabel'} color={'textBlack'} textAlign={'center'}>
          App Pin set successfully!
        </Text>
      </Box>
    </Layout>
  );
};

export default Success;
