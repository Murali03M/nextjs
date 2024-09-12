import { Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        name: { label: "Enter your name", type: "text", placeholder: "Murali", required: true },
        password: { label: "Password", type: "password", required: true }
      },
      async authorize(credentials) {
        // Replace this with real user data from your database
        const user = { id: "23", name: "murali", password: "password" };

        // Check if credentials match
        if (credentials?.name === user.name && credentials?.password === user.password) {
          return user;
        } else {
          return null;
        }
      }
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT-based sessions
  },
  secret: process.env.NEXTAUTH_SECRET || "",

  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token.sub) {
        // Add the user's ID to the session object
        session.user.id = token.sub;
      }
      return session;
    },
  },
};
