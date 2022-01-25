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

const AddPhone = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'AddPhone'>) => {
  const setPhone = useSignupStore((state) => state.setPhone);
  const onSubmit = ({ ...values }: FormValues) => {
    setPhone(values.phone);
    Keyboard.dismiss();
    navigation.navigate('VerifyPhone');
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
          title="Verify your mobile!"
          description="Make sure to use the number linked to \n your aadhar"
          label="Send OTP"
          onPress={handleSubmit}
          disabled={!(isValid && dirty)}
          isSignupBar
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

export default AddPhone;
