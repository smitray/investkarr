import { Box, Layout, AuthBottomAlterLink, Text } from '@ui';
import { Image } from 'react-native';
import React from 'react';
import { comonStyle } from '@cmSt';
import { moderateScale } from '@utils';
import { SocialButtons, SocialButtonDataType } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';

const images = {
  logo: require('@assets/images/logo.png'),
  email: require('@assets/images/envelope-fill.png'),
  google: require('@assets/images/google.png'),
  apple: require('@assets/images/apple.png'),
};

export const assets = [images.logo, images.apple, images.email, images.google];

const SignUpLanding = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'SignupLanding'>) => {
  const data: Array<SocialButtonDataType> = [
    {
      key: 'google',
      variant: 'secondary',
      label: 'Signup with Google',
      onPress: () => console.log('Signup with Google pressed'),
      image: images.google,
    },
    {
      key: 'apple',
      variant: 'apple',
      label: 'Signup with Apple',
      onPress: () => console.log('Signup with Apple pressed'),
      image: images.apple,
    },
    {
      key: 'email',
      variant: 'primary',
      label: 'Signup with Email',
      onPress: () => navigation.navigate('SignupWihEmail'),
      image: images.email,
    },
  ];
  return (
    <Layout>
      <Box
        flex={3}
        alignItems="center"
        justifyContent="center"
        paddingTop="xxl"
      >
        <Box
          width={moderateScale(90)}
          height={moderateScale(90) / 1}
          aspectRatio={1}
        >
          <Image
            resizeMode="contain"
            source={images.logo}
            style={comonStyle.resImage}
          />
        </Box>
        <Text variant="obTitle" textAlign="center" color="textBlack">
          Smarter way to grow {'\n'} your wealth
        </Text>
      </Box>
      <SocialButtons type="signup" data={data} />
      <AuthBottomAlterLink
        type="signup"
        onPress={() => navigation.navigate('LoginLanding')}
      />
    </Layout>
  );
};

export default SignUpLanding;
