import { Box, Layout, AuthBottomAlterLink } from '@ui';
import { Image } from 'react-native';
import React from 'react';
import { comonStyle } from '@cmSt';
import { moderateScale } from '@utils';
import { SocialButtons, SocialButtonDataType } from '@components';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParameterList } from '@tp/stack';

const images = {
  logo: require('@assets/images/logo-full.png'),
  email: require('@assets/images/envelope-fill.png'),
  google: require('@assets/images/google.png'),
  apple: require('@assets/images/apple.png'),
};

export const assets = [images.logo, images.apple, images.email, images.google];

const landing = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'LoginLanding'>) => {
  const data: Array<SocialButtonDataType> = [
    {
      key: 'email',
      variant: 'primary',
      label: 'Login with Email',
      onPress: () => navigation.navigate('LoginWithEmail'),
      image: images.email,
    },
    {
      key: 'google',
      variant: 'secondary',
      label: 'Login with Google',
      onPress: () => console.log('Login with Google pressed'),
      image: images.google,
    },
    {
      key: 'apple',
      variant: 'apple',
      label: 'Login with Apple',
      onPress: () => console.log('Login with Apple pressed'),
      image: images.apple,
    },
  ];
  const handlePhoneLogin = () => {
    navigation.navigate('Phone', {
      flow: 'login',
    });
  };
  return (
    <Layout>
      <Box
        flex={1}
        alignItems="center"
        justifyContent="center"
        paddingTop="xxl"
      >
        <Box
          width={moderateScale(130)}
          height={moderateScale(130) / 1.8}
          aspectRatio={1.8}
        >
          <Image
            resizeMode="contain"
            source={images.logo}
            style={comonStyle.resImage}
          />
        </Box>
      </Box>
      <SocialButtons type="login" data={data} onPress={handlePhoneLogin} />
      <AuthBottomAlterLink
        type="login"
        onPress={() => navigation.navigate('SignupLanding')}
      />
    </Layout>
  );
};

export default landing;
