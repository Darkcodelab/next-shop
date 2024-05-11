import NextAuth from "next-auth/next";
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google";
import prisma from "@/lib/prisma";

const handler = NextAuth({
  providers: [
    GoogleProvider<GoogleProfile>({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await prisma.user.findFirst({
        where: { email: session.user?.email },
      });

      if (session.user && sessionUser) {
        session.user.id = sessionUser.id.toString();
      }

      return session;
    },

    async signIn({ profile }) {
      const googleProfile = profile as GoogleProfile | undefined;
      try {
        let user = await prisma.user.findFirst({
          where: {
            email: googleProfile?.email,
          },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email: googleProfile?.email,
              image: googleProfile?.picture,
              name:
                googleProfile?.given_name + " " + googleProfile?.family_name,
            },
          });
        }
        return !!user?.id;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
