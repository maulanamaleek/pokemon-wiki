import { Locale } from '@/utils/i18n'
import { ELang } from '@utils/i18n/types';


export default function Home() {
  Locale.setLanguage(ELang.ID);
  const locale = Locale.getLocale();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Custom Text Bellow</h1>
      <h2>{locale.HELLO}</h2>
      <h2>{locale.SHARE}</h2>
    </main>
  )
}
