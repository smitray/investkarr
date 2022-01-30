import { PinProperties, OTPProperties } from '@components';

type FlowProperties = {
  flow: 'signup' | 'login';
};

type PinScreenParameters = PinProperties & FlowProperties;

export type RootStackParameterList = {
  OnBoarding: undefined;
  LoginLanding: undefined;
  SignupLanding: undefined;
  WihEmail: FlowProperties;
  AddName: undefined;
  Password: FlowProperties;
  Phone: FlowProperties;
  PAN: FlowProperties & {
    type?: 'email' | 'phone';
  };
  DOB: FlowProperties & {
    type?: 'email' | 'phone';
  };
  SignupSuccess: undefined;
  OTPVerify: OTPProperties;
  Pin: PinScreenParameters;
  Dummy: undefined;
  LoginWithEmail: undefined;
};
