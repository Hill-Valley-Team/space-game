export const prepareDataToRequest = (fields: string[], formData: FormData) =>
  fields.reduce((acc, field) => ({ ...acc, [field]: String(formData.get(field)) }), {});
