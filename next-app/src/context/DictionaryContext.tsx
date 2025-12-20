'use client';
import {createContext, ReactNode, useContext} from 'react';
import {DictionaryType} from "@/locales/getDictionary";

type DictionaryContextType = DictionaryType;

const DictionaryContext = createContext<DictionaryContextType | undefined>(undefined);

export function DictionaryProvider({children, dictionary}: { children: ReactNode; dictionary: DictionaryType }) {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  )
}

export function useDictionary(): DictionaryContextType {
  const context = useContext(DictionaryContext);
  if (!context) throw new Error('useDictionary must be used inside DictionaryProvider');
  return context;
}
