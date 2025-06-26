export type JsonWebToken = {
  sub: string;
  name: string;
  email: string;
  phone?: string;
  picture?: string;
  iat: number;
  exp: number;
  iss?: string;
  aud?: string;
  roles?: string[];
};
