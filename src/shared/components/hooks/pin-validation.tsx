import { useState, useEffect } from 'react';
import { PinProperties } from '../screens/pin';
type PinValidationProperties = PinProperties & {
  pin: string;
  confirmPin?: string;
};

const usePinValidation = ({
  pin,
  type,
  confirmPin = '',
}: PinValidationProperties) => {
  const [disabled, setDisabled] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [isConfirmValid, setIsConfirmValid] = useState(false);

  useEffect(() => {
    const isValidPin = pin.length === 4;
    setIsValid(isValidPin);
    setDisabled(!isValidPin);
    if (type === 'confirm' && confirmPin === pin) {
      setIsConfirmValid(true);
      setDisabled(!isValidPin || !isConfirmValid);
    }
  }, [pin, type, confirmPin, isConfirmValid]);

  return { disabled, isValid, isConfirmValid };
};

export default usePinValidation;
