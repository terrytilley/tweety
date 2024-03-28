import { type ReactElement, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';

import Navbar from './Navbar';

export default function Layout({ children }: { children: ReactElement }) {
  const { status } = useSession();
  const { systemTheme, theme } = useTheme();

  const [isDark, setIsDark] = useState(false);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setIsDark(currentTheme === 'dark');
    isDark && document.body.classList.add('dark');
  }, [currentTheme, isDark, status]);

  return (
    <>
      <Navbar />

      <main className="flex min-h-screen max-w-[572px] mx-auto">
        {children}
      </main>
    </>
  );
}
