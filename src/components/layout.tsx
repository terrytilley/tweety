import { type ReactElement, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';

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
      <main className="flex min-h-screen max-w-[572px] mx-auto">
        <span>Qwerty</span>
        {children}
      </main>
    </>
  );
}
