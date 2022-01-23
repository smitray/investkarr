import React from 'react';
import { useSignupStore } from '@store';
import Text from '../text';
const Step = () => {
  const count = useSignupStore((state) => state.count);
  return (
    <Text variant={'step'} color={'textLight'} marginHorizontal={'ml'}>
      {count}/6
    </Text>
  );
};

export default Step;
