export type AddThemeRequest = {
  theme: string;
  description: string;
};

export type GetUserThemeRequest = {
  iserId: string;
};

export type UserThemeData = {
  id: number;
  theme: string;
  description: string;
};
