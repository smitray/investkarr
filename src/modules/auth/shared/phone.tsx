import React from 'react';
import { TextInput } from '@ui';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthLayout } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
import { Keyboard } from 'react-native';
import { useSignupStore } from '@store';

type FormValues = {
  phone: string;
};

const initialValues: FormValues = {
  phone: '',
};

const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .required('Phone number is required')
    .matches(
      /^(\+91[\s-]?)?0?(91)?[7-9]\d{9}$/,
      'Phone number must be an Indian phone number',
    ),
});

const Phone = ({
  navigation,
  route,
}: StackScreenProps<RootStackParameterList, 'Phone'>) => {
  const { flow } = route.params;
  const setPhone = useSignupStore((state) => state.setPhone);
  const onSubmit = ({ ...values }: FormValues) => {
    setPhone(values.phone);
    Keyboard.dismiss();
    navigation.navigate('OTPVerify', {
      type: 'phone',
      flow,
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
          title={flow === 'signup' ? 'Verify your mobile!' : 'Welcome back'}
          description={
            flow === 'signup'
              ? 'Make sure to use the number linked to \n your aadhar'
              : 'Nice to meet you again!'
          }
          label="Send OTP"
          onPress={handleSubmit}
          disabled={!(isValid && dirty)}
          isSignupBar={flow === 'signup'}
        >
          <TextInput
            label="Mobile number"
            value={values.phone}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            errorMessage={errors.phone && touched.phone && errors.phone}
            keyboardType="phone-pad"
            autoCompleteType="tel"
            textContentType="telephoneNumber"
            phone={true}
          />
        </AuthLayout>
      )}
    </Formik>
  );
};

export default Phone;
