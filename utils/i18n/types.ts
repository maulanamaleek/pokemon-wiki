
export enum ELang {
  EN = 'en',
  ID = 'id'
}

// locale key sorted alphabetically
type TLocaleKey =
  | 'HELLO'
  | 'NAV_FEED'
  | 'NAV_HOME'
  | 'NAV_POKEDEX'
  | 'SHARE'
  | 'SIGN_IN';

export type TLocaleObject = Record<TLocaleKey, string>;
