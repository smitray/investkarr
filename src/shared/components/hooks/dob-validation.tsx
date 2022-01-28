import { differenceInYears } from 'date-fns';
import { useState, useEffect } from 'react';

const useDOBValidation = (dob: Date) => {
  const [age, setAge] = useState(false);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const isValidAge = differenceInYears(new Date(), dob) >= 18;
    setAge(isValidAge);
    setDisabled(!isValidAge);
  }, [dob]);

  return { disabled, age };
};

export default useDOBValidation;
