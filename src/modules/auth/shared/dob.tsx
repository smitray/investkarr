import React, { useState } from 'react';
import { Box, ButtonInput, Text, RecoveryLink } from '@ui';
import { StackScreenProps } from '@react-navigation/stack';
import { Keyboard } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { format } from 'date-fns';
import { AuthLayout, dobValidation } from '@components';
import { RootStackParameterList } from '@tp/stack';

const DOB = ({
  navigation,
  route,
}: StackScreenProps<RootStackParameterList, 'DOB'>) => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date());
  const { flow, type } = route.params;

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
    if (flow === 'signup' || (flow === 'login' && type === 'phone')) {
      navigation.navigate('Pin', {
        type: 'set',
        flow,
      });
    } else if (flow === 'login' && type === 'email') {
      navigation.navigate('Password', {
        flow,
      });
    }
  };

  const handleRecovery = () => {
    navigation.navigate('PAN', {
      flow,
      type,
    });
  };

  return (
    <AuthLayout
      title={flow === 'signup' ? 'Date of Birth' : 'Account recovery'}
      description={
        flow === 'signup'
          ? 'As mentioned in your PAN card'
          : 'This helps to show that this account realy \n belongs to you'
      }
      label={flow === 'signup' ? 'Create Account' : 'Send reset request'}
      onPress={onSubmit}
      disabled={disabled}
      isSignupBar={flow === 'signup'}
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
      {flow === 'login' && (
        <RecoveryLink title="Use PAN number" onPress={handleRecovery} />
      )}
    </AuthLayout>
  );
};

export default DOB;
