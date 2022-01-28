import React, { useState } from 'react';
import { Box, ButtonInput, Text } from '@ui';
import { StackScreenProps } from '@react-navigation/stack';
import { Keyboard } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import { AuthLayout, dobValidation } from '@components';
import { RootStackParameterList } from '@tp/stack';

const AddDOB = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'AddDOB'>) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());

  const { disabled, age } = dobValidation(date);

  const hideDatePicker = () => {
    setShow(false);
  };

  const handleConfirm = (dt: Date) => {
    setDate(dt);
    hideDatePicker();
  };

  const onSubmit = () => {
    Keyboard.dismiss();
    navigation.navigate('Pin', {
      type: 'set',
      flow: 'signup',
    });
  };

  return (
    <AuthLayout
      title="Date of Birth"
      description="As mentioned in your PAN card"
      label="Create Account"
      onPress={onSubmit}
      disabled={disabled}
      isSignupBar
    >
      <ButtonInput
        label="Date of birth"
        onPress={() => setShow(true)}
        value={format(date, 'dd/MM/yyyy')}
        image={require('@assets/images/calendar.png')}
      />
      <DateTimePickerModal
        isVisible={show}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {!age && (
        <Box width={'100%'}>
          <Text variant={'labelSm'} color={'errorText'} marginVertical={'ms'}>
            {'You must be at least 18 years old'}
          </Text>
        </Box>
      )}
    </AuthLayout>
  );
};

export default AddDOB;
