import NextAuth, { DefaultSession } from "next-auth";
import { GoogleProfile } from "next-auth/providers/google";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
