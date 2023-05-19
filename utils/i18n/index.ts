import localeEn from './en';
import localeId from './id';

import { ELang, TLocaleObject } from './types';

class I18n {
  private locale: TLocaleObject = localeEn;

  setLanguage(lang: ELang) {
    switch (lang) {
      case ELang.ID:
        this.locale = localeId;
        break;

      default:
        this.locale = localeEn;
        break;
    }
  }

  getLocale() {
    return this.locale;
  }
}

export const Locale = new I18n();
