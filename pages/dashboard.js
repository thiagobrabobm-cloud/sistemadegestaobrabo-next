import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { signOut } from "next-auth/react";
import Image from "next/image";

export default function Dashboard({ user }) {
  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Dashboard</h1>
      <p>Bem-vindo, {user.name} ({user.email})</p>

      {user.image && (
        <Image
          src={user.image}
          alt="Avatar"
          width={120}
          height={120}
          style={{ borderRadius: "50%" }}
        />
      )}

      <div style={{ marginTop: 16 }}>
        <button onClick={() => signOut()}>Sair</button>
      </div>
    </div>
  );
}

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
