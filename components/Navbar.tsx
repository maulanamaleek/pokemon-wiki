'use client';

import { Locale } from '@utils/i18n';
import { ELang } from '@utils/i18n/types';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Avatar from './Avatar';

const Navbar = () => {
  // Locale.setLanguage(ELang.ID);
  const path = usePathname()
  console.log({ path })
  const { data: session } = useSession();
  const [providers, setProviders] = useState<any>(null);
  const locale = Locale.getLocale();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      console.log('providers response', response)

      setProviders(response);
    };

    setUpProviders();
  }, []);

  const userInfo = (() => {
    if (!session) {
      return <button onClick={() => signIn(providers['google'].id)} className="black_btn">{locale.SIGN_IN}</button>;
    }

    return (
      <div className="flex gap-5">
        <Avatar
          // todo add default image for avatar
          imgUrl={session.user?.image || ''}
          size={30}
        />
        <button
          className="bg-red-500 rounded-full px-4 text-white font-semibold"
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    )
  })()

  return (
    <nav className="fixed sm:left-1/2 sm:-translate-x-1/2 w-full sm:w-2/3 shadow-md z-20 h-14 flex items-center sm:rounded-lg mx-auto sm:mt-10 bg-white">
      {/* Desktop View */}
      <div className="hidden sm:flex w-full justify-between px-5">
        <div className="flex gap-16">
          <Link href="/" className={`nav_link ${path === '/' ? 'selected' : ''}`}>
            <Image
              src="/assets/icons/gengar.svg"
              width={23}
              height={23}
              alt="Home"

            />
            <span>{locale.NAV_HOME}</span>
          </Link>
          {/* <Link href="/pokedex" className={`nav_link ${/pokedex/.test(path) ? 'selected' : ''}`}>
          <Image
            src="/assets/icons/pokeball.svg"
            width={23}
            height={23}
            alt="Pokedex"
          />
          <span>{locale.NAV_POKEDEX}</span>
        </Link> */}
          <Link href="/forum" className={`nav_link ${/forum/.test(path) ? 'selected' : ''}`}>
            <Image
              src="/assets/icons/hat.svg"
              width={23}
              height={23}
              alt="News"
            />
            <span>{locale.NAV_FEED}</span>
          </Link>
          {/* <button onClick={() => signIn(providers['google'].id)} className="black_btn">{locale.SIGN_IN}</button> */}
        </div>
        {userInfo}
      </div>

      {/* Mobile View */}
      <div className="w-full sm:hidden flex px-4 justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src="/logo.gif"
            width={30}
            height={30}
            alt="pokemon wiki"
          />
          <h2><span className="font-bold text-green-600">Pokemon</span></h2>
        </div>
        <Image
          src="/assets/icons/menu.svg"
          width={30}
          height={30}
          alt="navigation menu"
        />
      </div>
    </nav>
  )
}

export default Navbar