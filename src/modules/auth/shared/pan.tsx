import { RecoveryLink, TextInput } from '@ui';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthLayout } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
import { Keyboard } from 'react-native';
import { useSignupStore } from '@store';

type FormValues = {
  pan: string;
};

const initialValues: FormValues = {
  pan: '',
};

const validationSchema = Yup.object().shape({
  pan: Yup.string()
    .required('PAN is a required')
    .matches(/^[A-Z]{5}\d{4}[A-Z]$/, 'PAN is invalid'),
});

const PAN = ({
  navigation,
  route,
}: StackScreenProps<RootStackParameterList, 'PAN'>) => {
  const setCount = useSignupStore((state) => state.setCount);
  const { flow, type } = route.params;

  const onSubmit = () => {
    Keyboard.dismiss();
    if (flow === 'signup') {
      setCount(6);
      navigation.navigate('DOB', {
        flow,
      });
    } else if (flow === 'login' && type === 'phone') {
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
    navigation.navigate('DOB', {
      flow,
      type,
    });
  };

  return (
    <Formik {...{ initialValues, onSubmit, validationSchema }} validateOnChange>
      {({
        handleSubmit,
        values,
        handleChange,
        handleBlur,
        touched,
        errors,
        isValid,
        dirty,
      }) => (
        <AuthLayout
          title={
            flow === 'signup'
              ? "Let's verify your PAN card"
              : 'Account recovery'
          }
          description={
            flow === 'signup'
              ? 'PAN is mandatory to invest in Inda'
              : 'This helps to show that this account realy \n belongs to you'
          }
          label={flow === 'signup' ? 'Continue' : 'Send reset request'}
          onPress={handleSubmit}
          disabled={!(isValid && dirty)}
          isSignupBar={flow === 'signup'}
        >
          <TextInput
            label="PAN number"
            value={values.pan}
            onChangeText={handleChange('pan')}
            onBlur={handleBlur('pan')}
            autoCapitalize="characters"
            errorMessage={errors.pan && touched.pan && errors.pan}
          />
          {flow === 'login' && (
            <RecoveryLink title="Use Date of Birth" onPress={handleRecovery} />
          )}
        </AuthLayout>
      )}
    </Formik>
  );
};

export default PAN;
