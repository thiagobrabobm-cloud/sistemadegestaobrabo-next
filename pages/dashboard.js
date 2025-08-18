// pages/dashboard.js
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Dashboard({ user }) {
  return (
    <main style={{ maxWidth: 960, margin: "3rem auto", textAlign: "center" }}>
      <h1>Dashboard</h1>
      <p>Bem-vindo, {user.name} ({user.email})</p>
      {user.image && (
        <img
          src={user.image}
          alt={user.name}
          style={{ borderRadius: "50%", width: 96, height: 96, objectFit: "cover" }}
        />
      )}

      <div style={{ marginTop: 24 }}>
        <a href="/api/auth/signout">Sair</a>
      </div>

      {/* Aqui depois você coloca as telas/funcionalidades do sistema */}
    </main>
  );
}

// Protege a página no lado do servidor
export async function getServerSideProps(ctx) {
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=${encodeURIComponent("/dashboard")}`,
        permanent: false,
      },
    };
  }
  return { props: { user: session.user } };
}
