import { prisma } from "@utils/prisma";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "@constants/api";
// import { signOut } from "next-auth/react";

const handler = NextAuth({

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    // TwitterProvider({
    //   clientId: process.env.TWITTER_CLIENT_ID,
    //   clientSecret: process.env.TWITTER_CLIENT_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    // }),
  ],
  callbacks: {
    async session({ session }) {
      // const sessionUser = await User.findOne({ email: session.user.email });

      // session.user.id = sessionUser._id.toString();

      return session;
    },

    async signIn({ profile }) {
      const nProfile = profile as { picture: string; email: string; }
      try {

        //check if a user exists in the database
        const userExists = await prisma.user.findFirst({ where: { email: profile?.email } })
        let uID = userExists?.id;
        //if not, create a new user
        if (!userExists && nProfile.email && nProfile.picture) {
          const user = {
            email: nProfile.email,
            avatarUrl: nProfile.picture
          }

          const data = await prisma.user.create({
            data: user
          })

          uID = data.id;
        }
        // todo encrypt cookie first and store secret
        const token = jwt.sign({ ...nProfile, id: uID }, JWT_SECRET)
        cookies().set('token', token)
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },

  },
});

export { handler as GET, handler as POST };