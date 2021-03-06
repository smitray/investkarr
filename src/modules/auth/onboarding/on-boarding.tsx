import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Text, Layout, Box, Button } from '@ui';
import { SCREEN_WIDTH, normalizeSize } from '@utils';
import { comonStyle } from '@cmSt';
import { useTheme } from '@theme';
import { RootStackParameterList } from '@tp/stack';

type SlideType = {
  key: string;
  title: string;
  text: string;
  image: number;
  paddingTop: 'o' | 'm';
};

const slides: SlideType[] = [
  {
    key: 'one',
    title: 'Goal Based investing',
    text: 'Invest into time tested portfolios',
    image: require('@assets/images/goal-based.png'),
    paddingTop: 'o',
  },
  {
    key: 'two',
    title: 'Zero commission',
    text: 'Invest into direct plans of mutual funds \n schemes',
    image: require('@assets/images/zero-commission.png'),
    paddingTop: 'm',
  },
  {
    key: 'three',
    title: 'Unbiased advice',
    text: 'Independent company, not part of any \n large company',
    image: require('@assets/images/unbiased-advise.png'),
    paddingTop: 'm',
  },
  {
    key: 'three',
    title: 'Data Security',
    text: 'We do not sell any of your data',
    image: require('@assets/images/data-security.png'),
    paddingTop: 'o',
  },
];

export const assets = slides.map((slide) => slide.image);

const OnBoarding = ({
  navigation,
}: StackScreenProps<RootStackParameterList, 'OnBoarding'>) => {
  const theme = useTheme();

  const RenderItems = (item: SlideType) => (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Box
        width={SCREEN_WIDTH - normalizeSize(50)}
        height={SCREEN_WIDTH / 1.57}
        aspectRatio={1.57}
        paddingHorizontal="ml"
        paddingTop={item.paddingTop}
      >
        <Image
          resizeMode={'contain'}
          source={item.image}
          style={comonStyle.resImage}
        />
      </Box>
      <Text
        variant="obTitle"
        marginTop="xxl"
        marginBottom="s"
        textAlign="center"
        color="textBlack"
      >
        {item.title}
      </Text>
      <Text variant="obDescription" textAlign="center" color="textLight">
        {item.text}
      </Text>
    </Box>
  );

  return (
    <Layout>
      <Box flex={7}>
        <AppIntroSlider
          keyExtractor={(item, index) => `${item.key}-${index}`}
          renderItem={({ item }) => RenderItems(item)}
          data={slides}
          showNextButton={false}
          showDoneButton={false}
          dotStyle={{
            width: 12,
            height: 4,
            backgroundColor: theme.colors.dotBackground,
          }}
          activeDotStyle={{
            width: 24,
            height: 4,
            backgroundColor: theme.colors.dotActive,
          }}
        />
      </Box>
      <Box flex={1} flexDirection="row" justifyContent="space-evenly">
        <Button
          label="Login"
          onPress={() => navigation.push('LoginLanding')}
          widthType="two"
          variant="secondary"
        />
        <Button
          label="Signup"
          onPress={() => navigation.push('SignupLanding')}
          widthType="two"
          variant="primary"
        />
      </Box>
    </Layout>
  );
};

export default OnBoarding;
