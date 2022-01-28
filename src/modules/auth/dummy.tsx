import React from 'react';
import { Layout, Box, Text } from '@ui';
const Dummy = () => {
  return (
    <Layout padding={'ml'}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant={'successLabel'} color={'textBlack'} textAlign={'center'}>
          Waiting for #branch(&quot;explore yourself&quot;) to be fixed and
          merged
        </Text>
      </Box>
    </Layout>
  );
};

export default Dummy;
