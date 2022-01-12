import { Box, Layout, Text } from '@ui';
import React from 'react';

const landing = () => {
  return (
    <Layout>
      <Box flex={1} alignContent="center" justifyContent="center">
        <Text variant="obTitle" color="textBlack">
          This is login page
        </Text>
      </Box>
    </Layout>
  );
};

export default landing;
