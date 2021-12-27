export type SignRequest = Record<string, string>;

export type SignInRequest = {
  login: string;
  password: string;
} & SignRequest;

export type SignUpRequest = SignInRequest & {
  first_name: string;
  second_name: string;
  email: string;
  phone: string;
} & SignRequest;
