import { TextInput } from '@ui';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthLayout } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
import { Keyboard } from 'react-native';
// import { useSignupStore } from '@store';

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

const WithEmail = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'SignupWihEmail'>) => {
  const onSubmit = () => {
    Keyboard.dismiss();
    navigation.navigate('VerifyEmail');
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
          title="Let's verify your PAN card"
          description="PAN is mandatory to invest in Inda"
          label="Continue"
          onPress={handleSubmit}
          disabled={!(isValid && dirty)}
          isSignupBar
        >
          <TextInput
            label="PAN number"
            value={values.pan}
            onChangeText={handleChange('pan')}
            onBlur={handleBlur('pan')}
            autoCapitalize="characters"
            errorMessage={errors.pan && touched.pan && errors.pan}
          />
        </AuthLayout>
      )}
    </Formik>
  );
};

export default WithEmail;
