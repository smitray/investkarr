import { Box, Layout, Text, Button, TextInput } from '@ui';
import React, { useCallback } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AuthLayout } from '@components';

type FormValues = {
  email: string;
};

const initialValues: FormValues = {
  email: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is a required field')
    .email('Please enter valid email address'),
});

const WithEmail = () => {
  const onSubmit = useCallback(({ ...values }: FormValues) => {
    console.log(values.email);
  }, []);

  return (
    <AuthLayout
      title="Nice to meet you"
      description="Choose the email you would like to use to \n log in to your account"
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Box flex={4} alignItems={'center'}>
          <Formik
            {...{ initialValues, onSubmit, validationSchema }}
            validateOnChange
          >
            {({
              handleSubmit,
              values,
              handleChange,
              handleBlur,
              touched,
              errors,
            }) => (
              <>
                <TextInput
                  label="Enter email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                  autoCompleteType="username"
                  textContentType="emailAddress"
                  errorMessage={errors.email && touched.email && errors.email}
                />
                <Button label="Send OTP" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </Box>
      </TouchableWithoutFeedback>
    </AuthLayout>
  );
};

export default WithEmail;
