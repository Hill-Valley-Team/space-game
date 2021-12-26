export const prepareDataToRequest = (fields: string[], formData: FormData) => {
  const obj: Record<string, string> = {};

  fields.forEach((field) => {
    obj[field] = String(formData.get(field));
  });

  return obj;
};
