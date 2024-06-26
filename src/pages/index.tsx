import type { InferGetServerSidePropsType } from 'next';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { type ReactElement } from 'react';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Link from 'next/link';
import superjson from 'superjson';

import { db } from '~/server/db';
import { appRouter } from '~/server/api/root';
import { getServerAuthSession } from '~/server/auth';
import { api } from '~/utils/api';
import { requireAuth } from '~/utils/auth';
import Layout from '~/components/layout';
import CreatePost from '~/components/CreatePost';

export default function Home(
  _props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const hello = api.post.hello.useQuery({ text: 'from tRPC' });

  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <CreatePost user={sessionData?.user} />

        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/usage/first-steps"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">First Steps →</h3>
              <div className="text-lg">
                Just the basics - Everything you need to know to set up your
                database and authentication.
              </div>
            </Link>

            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="https://create.t3.gg/en/introduction"
              target="_blank"
            >
              <h3 className="text-2xl font-bold">Documentation →</h3>
              <div className="text-lg">
                Learn more about Create T3 App, the libraries it uses, and how
                to deploy it.
              </div>
            </Link>
          </div>

          {sessionData && (
            <p className="text-center text-2xl text-white">
              <span>Logged in as {sessionData.user?.name}</span>
            </p>
          )}

          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl text-white">
              {hello.data ? hello.data.greeting : 'Loading tRPC query...'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = requireAuth(async (ctx) => {
  if (!ctx.locale) return { props: {} };

  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: { db, session: await getServerAuthSession(ctx) },
    transformer: superjson,
  });

  return {
    props: {
      trpcState: helpers.dehydrate(),
    },
  };
});
