import { useCallback, useMemo, useState } from 'react';
import { checkFormInput, ValidationResult } from '../../utils/validation';
import { HookResult, HookInputObject, HookOutputObject, HookOutputFunction } from './types';

export const useFormInput = ({ value = '', type = 'text' }: HookInputObject): HookResult => {
  const [inputValue, setValue] = useState(value);
  const [validationType] = useState(type);
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    checkFormInput(value, type),
  );

  const changeValue: HookOutputFunction = useCallback(
    ({ value: newValue, equal }) => {
      setValue(newValue!);
      const result = checkFormInput(newValue!, validationType, equal);
      setValidationResult(result);
    },
    [validationType],
  );

  const resultObject = useMemo<HookOutputObject>(
    () => ({
      value: inputValue,
      errorMessage: validationResult.errorMessage,
      isValid: validationResult.isValid,
    }),
    [inputValue, validationResult],
  );

  return [resultObject, changeValue];
};
