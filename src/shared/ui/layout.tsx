import React from 'react';
import { Children } from '@tp/global';
import Box from './box';

const Layout = ({ children }: { children: Children }) => {
  return (
    <Box flex={1} backgroundColor="background">
      {children}
    </Box>
  );
};

export default Layout;
