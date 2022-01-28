import React from 'react';
import { PinScreen } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';

const Pin = ({
  navigation,
  route,
}: StackScreenProps<RootStackParameterList, 'Pin'>) => {
  const { type, flow } = route.params;
  const handleSubmit = () => {
    if (type === 'set') {
      navigation.navigate('Pin', {
        type: 'confirm',
        flow,
      });
    } else if (type === 'confirm' && flow === 'signup') {
      navigation.navigate('SignupSuccess');
    }
  };
  return <PinScreen type={type} onPress={handleSubmit} />;
};

export default Pin;
