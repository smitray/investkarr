import { PinProperties } from '@components';

type PinScreenParameters = PinProperties & {
  flow: 'signup' | 'login';
};

export type RootStackParameterList = {
  OnBoarding: undefined;
  LoginLanding: undefined;
  SignupLanding: undefined;
  SignupWihEmail: undefined;
  VerifyEmail: undefined;
  AddName: undefined;
  SetPassword: undefined;
  AddPhone: undefined;
  VerifyPhone: undefined;
  AddPAN: undefined;
  AddDOB: undefined;
  SignupSuccess: undefined;
  Pin: PinScreenParameters;
  Dummy: undefined;
};
