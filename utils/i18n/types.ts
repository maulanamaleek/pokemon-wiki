
export enum ELang {
  EN = 'en',
  ID = 'id'
}

// locale key sorted alphabetically
type TLocaleKey =
  | 'HELLO'
  | 'SHARE';

export type TLocaleObject = Record<TLocaleKey, string>;
