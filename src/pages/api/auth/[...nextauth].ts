/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
// pages/api/auth/[...nextauth].ts
import NextAuth, { Account, Profile, User } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import { query as q } from "faunadb";

import { fauna } from '../../../services/fauna';

export default NextAuth({

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          // I wish to request additional permission scopes.
          scope: 'read:user, user:email',
        },
      },
    }),
  ],
  callbacks: {
    async signIn({
      user, account, profile, email, credentials,
    }) {
      const Email = user;
      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('user_by_email'),
                  q.Casefold(user.email),
                ),
              ),
            ),
            q.Create(
              q.Collection('users'),
              { data: { Email } },
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(user.email),
              ),
            ),
          ),
        );
        return true;
      } catch {
        return false;
      }
    },
  },
});
