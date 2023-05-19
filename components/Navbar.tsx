'use client';

import { Locale } from '@utils/i18n';
import { ELang } from '@utils/i18n/types';
import Image from 'next/image';
import Link from "next/link";

const Navbar = () => {
  // Locale.setLanguage(ELang.ID);
  const locale = Locale.getLocale();

  return (
    <nav className="fixed sm:left-1/2 sm:-translate-x-1/2 w-full sm:w-2/3 shadow-md z-10 h-14 flex items-center sm:rounded-lg mx-auto sm:mt-10">
      {/* Desktop View */}
      <div className="hidden sm:flex w-full justify-around">
        <Link href="/" className="nav_link selected">
          <Image
            src="/assets/icons/gengar.svg"
            width={23}
            height={23}
            alt="Home"

          />
          <span>{locale.NAV_HOME}</span>
        </Link>
        <Link href="/" className="nav_link">
          <Image
            src="/assets/icons/pokeball.svg"
            width={23}
            height={23}
            alt="Pokedex"
          />
          <span>{locale.NAV_POKEDEX}</span>
        </Link>
        <Link href="/" className="nav_link">
          <Image
            src="/assets/icons/hat.svg"
            width={23}
            height={23}
            alt="News"
          />
          <span>{locale.NAV_FEED}</span>
        </Link>
        <button className="black_btn">{locale.SIGN_IN}</button>
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