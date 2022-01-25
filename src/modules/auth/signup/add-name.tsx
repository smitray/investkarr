import { TextInput } from '@ui';
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthLayout } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';
import { Keyboard } from 'react-native';
import { useSignupStore } from '@store';

type FormValues = {
  fname: string;
  lname: string;
};

const initialValues: FormValues = {
  fname: '',
  lname: '',
};

const validationSchema = Yup.object().shape({
  fname: Yup.string().required('First name is reuired'),
  lname: Yup.string().required('Last name is reuired'),
});

const AddName = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'AddName'>) => {
  const setCount = useSignupStore((state) => state.setCount);
  const onSubmit = () => {
    setCount(3);
    Keyboard.dismiss();
    navigation.navigate('SetPassword');
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
          title="What do we call you?"
          description="Make sure this name matches the one \n appearing on your PAN card"
          label="Continue"
          onPress={handleSubmit}
          disabled={!(isValid && dirty)}
          isSignupBar
        >
          <TextInput
            label="First name"
            value={values.fname}
            onChangeText={handleChange('fname')}
            onBlur={handleBlur('fname')}
            errorMessage={errors.fname && touched.fname && errors.fname}
            autoCompleteType="username"
          />
          <TextInput
            label="Last name"
            value={values.lname}
            onChangeText={handleChange('lname')}
            onBlur={handleBlur('lname')}
            errorMessage={errors.lname && touched.lname && errors.lname}
            autoCompleteType="username"
          />
        </AuthLayout>
      )}
    </Formik>
  );
};

export default AddName;
