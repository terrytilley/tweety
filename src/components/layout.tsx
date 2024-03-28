import { type ReactElement, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  HeartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';

import { type MenuItem } from '~/types';
import Navbar from './Navbar';
import NavMenuFooter from './NavMenuFooter';

export default function Layout({ children }: { children: ReactElement }) {
  const { status } = useSession();
  const { systemTheme, theme } = useTheme();

  const [isDark, setIsDark] = useState(false);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setIsDark(currentTheme === 'dark');
    isDark && document.body.classList.add('dark');
  }, [currentTheme, isDark, status]);

  const menuItems: MenuItem[] = [
    { icon: HomeIcon, href: '/' },
    { icon: MagnifyingGlassIcon, href: '/' },
    { icon: PencilSquareIcon, href: '/' },
    { icon: HeartIcon, href: '/' },
    { icon: UserIcon, href: '/' },
  ];

  return (
    <>
      <Navbar menuItems={menuItems} />

      <main className="flex min-h-screen max-w-[572px] mx-auto">
        {children}
      </main>

      <NavMenuFooter menuItems={menuItems} />
    </>
  );
}
