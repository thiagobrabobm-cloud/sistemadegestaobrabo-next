import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const allowed = new Set(["thiagobrabobm@gmail.com", "marlucezanco02@gmail.com"]);

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  debug: true, // útil no terminal/Logs da Vercel
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const email = (user?.email || "").toLowerCase().trim();
      return allowed.has(email); // só entra se estiver na allowlist
    },
    async jwt({ token, account, profile }) {
      // garante que o e-mail exista no token para o middleware/cliente
      if (account && profile?.email) token.email = (profile.email || "").toLowerCase();
      return token;
    },
    async session({ session, token }) {
      if (token?.email) session.user.email = token.email;
      return session;
    },
  },
});
