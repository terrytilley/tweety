import { type GetServerSideProps, type GetServerSidePropsContext } from 'next';

import { getServerAuthSession } from '~/server/auth';

export const requireAuth =
  (func: GetServerSideProps) => async (ctx: GetServerSidePropsContext) => {
    const session = await getServerAuthSession(ctx);

    if (!session) {
      return {
        redirect: {
          destination: `/api/auth/signin?callbackUrl=${encodeURIComponent(
            ctx.resolvedUrl,
          )}`,
          permanent: false,
        },
      };
    }

    return await func(ctx);
  };
