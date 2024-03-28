import type { ReactElement, ReactNode } from 'react';
import { type Session } from 'next-auth';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';
import { Inter } from 'next/font/google';

import { api } from '~/utils/api';

import '~/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps<{ session: Session | null }> & {
  Component: NextPageWithLayout;
};

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ThemeProvider attribute="class">
      <SessionProvider session={session}>
        <div
          className={`font-sans ${inter.variable} bg-white dark:bg-[#101010]`}
        >
          {getLayout(<Component {...pageProps} />)}
        </div>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default api.withTRPC(MyApp);
