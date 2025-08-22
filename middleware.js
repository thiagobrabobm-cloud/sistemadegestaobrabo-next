import { withAuth } from "next-auth/middleware";

const allowed = new Set(["thiagobrabobm@gmail.com", "marlucezanco02@gmail.com"]);

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      const email = (token?.email || "").toLowerCase().trim();
      return allowed.has(email); // só navega se o e-mail estiver liberado
    },
  },
});

export const config = { matcher: ["/dashboard/:path*"] };
