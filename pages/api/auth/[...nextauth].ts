import { env } from '@/lib/env';
import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

import type { Adapter } from "next-auth/adapters"

export const authOptions: NextAuthOptions = {
  // PrismaAdapter(prisma): Adapter
  adapter: PrismaAdapter(prisma) as Adapter,
  theme: {
    logo: '/images/logo-text.png',
  },
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id;
      session.user.image = user.image;
      return session;
    },
  },
};

export default NextAuth(authOptions);
