import { useState, useEffect } from 'react';

const useOTPValidation = (otp: string) => {
  const [disabled, setDisabled] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const isValidOTP = otp.length === 6;
    setIsValid(isValidOTP);
    setDisabled(!isValidOTP);
  }, [otp]);

  return { disabled, isValid };
};

export default useOTPValidation;
