import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export default NextAuth({
    // secret: process.env.SECRET,
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        // authorization: {
        //   params: {
        //     prompt: "consent",
        //     access_type: "offline",
        //     response_type: "code"
        //   }
        // },
        // callbacks: {
        //   async signIn({ account, profile }) {
        //     if (account.provider === "google") {
        //       return profile.email_verified && profile.email.endsWith("@example.com")
        //     }
        //     return true // Do different verification for other providers that don't have `email_verified`
        //   },
        // }
      }),
    ],
  })