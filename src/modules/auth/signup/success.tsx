import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { BottomSheet } from 'react-native-elements';
import { Box, Text, Layout, Button } from '@ui';
import { RootStackParameterList } from '@tp/stack';
import { moderateScale, SCREEN_HEIGHT, SCREEN_WIDTH } from '@utils';

const Success = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'SignupSuccess'>) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1700);
  }, []);
  const handleDone = () => {
    console.log('hi');
  };
  return (
    <Layout padding={'ml'}>
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text variant={'successLabel'} color={'textBlack'} textAlign={'center'}>
          App Pin set successfully!
        </Text>
      </Box>
      <BottomSheet isVisible={show}>
        <Box
          alignItems={'center'}
          height={SCREEN_HEIGHT / 2}
          width={SCREEN_WIDTH}
          backgroundColor={'white'}
          borderTopLeftRadius={'m'}
          borderTopRightRadius={'m'}
        >
          <Image
            source={require('@assets/images/lock-icon.png')}
            style={{
              width: moderateScale(80),
              height: moderateScale(80),
              marginTop: moderateScale(32),
            }}
          />
          <Text
            variant={'obTitle'}
            marginTop={'l'}
            marginBottom={'ms'}
            color={'textBlack'}
          >
            Double protection
          </Text>
          <Text
            variant={'authDescription'}
            textAlign={'center'}
            color={'orBorder'}
          >
            {'We have enabled phone lock for you as an\nadded security measure'}
          </Text>
          <Button
            label="Done"
            onPress={handleDone}
            style={{
              marginTop: moderateScale(32),
              marginBottom: moderateScale(12),
            }}
          />
          <Text variant={'labelSm'} textAlign={'center'} color={'orBorder'}>
            This can changed later in the app
          </Text>
        </Box>
      </BottomSheet>
    </Layout>
  );
};

export default Success;
