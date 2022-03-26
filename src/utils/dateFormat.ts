export const dateFormat = (dt: string, options?: Intl.DateTimeFormatOptions) => {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'UTC',
  };

  return new Date(dt).toLocaleString('ru', options ?? defaultOptions);
};
