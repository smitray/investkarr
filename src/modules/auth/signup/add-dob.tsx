import React, { useState } from 'react';
import { ButtonInput } from '@ui';
import { StackScreenProps } from '@react-navigation/stack';
import { Keyboard } from 'react-native';
import { format } from 'date-fns';
import { AuthLayout } from '@components';
import { RootStackParameterList } from '@tp/stack';

const AddDOB = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'AddDOB'>) => {
  const [disabled, setDisabled] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <AuthLayout
      title="Date of Birth"
      description="As mentioned in your PAN card"
      label="Create Account"
      onPress={() => console.log('hi')}
      disabled={disabled}
      isSignupBar
    >
      <ButtonInput
        label="Date of birth"
        onPress={() => setShow(true)}
        value={format(date, 'dd/MM/yyyy')}
        image={require('@assets/images/calendar.png')}
      />
    </AuthLayout>
  );
};

export default AddDOB;
