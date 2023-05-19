import Locale from '@/utils/i18n'
import { ELang } from '@/utils/i18n/types';
import Image from 'next/image'

export default function Home() {
  Locale.setLanguage(ELang.EN);
  const locale = Locale.getLocale();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Custom Text Bellow</h1>
      <h2>{locale.HELLO}</h2>
      <h2>{locale.SHARE}</h2>
    </main>
  )
}
