import { useState, useEffect } from 'react';

const usePasswordValidation = (password: string) => {
  const [minEight, setMinEight] = useState(false);
  const [oneSpChar, setOneSpChar] = useState(false);
  const [oneUpperCase, setOneUpperCase] = useState(false);
  const [oneDigit, setOneDigit] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const isMinEight = password.length >= 8;
    const isOneSpChar = password.match(/[!#$&*,./@^]/g) !== null;
    const isOneUpperCase = password.match(/[A-Z]/g) !== null;
    const isOneDigit = password.match(/\d/g) !== null;

    setMinEight(isMinEight);
    setOneSpChar(isOneSpChar);
    setOneUpperCase(isOneUpperCase);
    setOneDigit(isOneDigit);
    setDisabled(!isMinEight || !isOneSpChar || !isOneUpperCase || !isOneDigit);
  }, [password]);

  return { minEight, oneSpChar, oneUpperCase, oneDigit, disabled };
};

export default usePasswordValidation;
