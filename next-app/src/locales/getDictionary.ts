import 'server-only'

const dictionaries = {
  en: () => import('./en/common.json').then((module) => module.default),
  pl: () => import('./pl/common.json').then((module) => module.default),
}

export type Locale = keyof typeof dictionaries

export type DictionaryType = Awaited<ReturnType<typeof dictionaries[Locale]>>

export const getDictionary = async (locale: Locale): Promise<DictionaryType> => dictionaries[locale]()