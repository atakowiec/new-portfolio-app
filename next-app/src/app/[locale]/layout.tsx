import "@/css/globals.css";
import {ReactNode} from "react";
import {redirect} from "next/navigation";
import {getDictionary, Locale} from "@/locales/getDictionary";
import {DictionaryProvider} from "@/context/DictionaryContext";
import {fetchStrapi} from "@/axios/strapi";

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: string
  }>;
};

export default async function RootLayout({children, params}: Props) {
  const {locale} = await params;

  if (!["en", "pl"].includes(locale)) {
    return redirect("/en");
  }

  const dictionary = await getDictionary(locale as Locale);

  const {data: {title, description}} = await fetchStrapi("metadata", locale as Locale)

  return (
    <html lang={locale}>
    <head>
      <title>
        {title}
      </title>
      <meta name="description" content={description}/>
    </head>
    <body>
    <DictionaryProvider dictionary={dictionary}>
      {children}
    </DictionaryProvider>
    </body>
    </html>
  );
}
