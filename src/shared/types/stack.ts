import { PinProperties, OTPProperties } from '@components';

type PinScreenParameters = PinProperties & {
  flow: 'signup' | 'login';
};

export type RootStackParameterList = {
  OnBoarding: undefined;
  LoginLanding: undefined;
  SignupLanding: undefined;
  WihEmail: {
    flow: 'signup' | 'login';
  };
  AddName: undefined;
  SetPassword: undefined;
  Phone: {
    flow: 'signup' | 'login';
  };
  AddPAN: undefined;
  AddDOB: undefined;
  SignupSuccess: undefined;
  OTPVerify: OTPProperties;
  Pin: PinScreenParameters;
  Dummy: undefined;
  LoginWithEmail: undefined;
};
