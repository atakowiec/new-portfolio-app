'use client';
import {createContext, ReactNode, useContext} from 'react';
import {DictionaryType, Locale} from "@/locales/getDictionary";

type DictionaryContextType = {
  dictionary: DictionaryType,
  locale: Locale
};

const I18nContext = createContext<DictionaryContextType | undefined>(undefined);

export function I18nProvider({children, dictionary, locale}: { children: ReactNode; dictionary: DictionaryType, locale: Locale }) {
  return (
    <I18nContext.Provider value={{
      dictionary,
      locale
    }}>
      {children}
    </I18nContext.Provider>
  )
}

function useI18nContext() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useDictionary must be used inside I18nProvider');
  return context;
}

export function useDictionary(): DictionaryType {
  return useI18nContext().dictionary;
}

export function useLocale(): Locale {
  return useI18nContext().locale;
}
