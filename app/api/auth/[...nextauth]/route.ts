import { prisma } from "@utils/prisma";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import { connectToDatabase } from "@utils/database";
// import User from "@models/user";

const handler = NextAuth({
  // console.log(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);

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
      console.log("PROFILEEEE", profile)
      // return true;
      try {

        //check if a user exists in the database
        const userExists = await prisma.user.findFirst({ where: { email: profile?.email } })
        //if not, create a new user
        if (!userExists && nProfile.email && nProfile.picture) {
          // const user = await User.create({
          //   email: profile.email,
          //   username: profile.name.replace(" ", "").toLowerCase(),
          //   images: profile.picture,
          // });
          const user = {
            email: nProfile.email,
            avatarUrl: nProfile.picture
          }

          await prisma.user.upsert({
            where: { email: user.email },
            update: { ...user },
            create: { ...user }
          })
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };