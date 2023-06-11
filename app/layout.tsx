import '@styles/global.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import { Locale } from '@utils/i18n'
import { ELang } from '@utils/i18n/types'
import { ApolloWrapper } from '@utils/apollo-wrapper'
import Provider from '@components/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokemon Wiki',
  description: 'Discover pokemons & make your own collections',
  icons: '/logo.gif',
  themeColor: '#ffffff'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  Locale.setLanguage(ELang.ID);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
        </div>
        <Provider>

          <ApolloWrapper>

            <main className="app">
              <Navbar />
              {children}
            </main>
          </ApolloWrapper>
        </Provider>
      </body>
    </html>
  )
}
