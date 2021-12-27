import { SignInRequest } from '../../api/types';

export function prepareDataToRequest<T extends SignInRequest>(
  fields: string[],
  formData: FormData,
) {
  const obj = {} as T;

  fields.forEach((field) => {
    obj[field] = String(formData.get(field));
  });

  return obj;
}
