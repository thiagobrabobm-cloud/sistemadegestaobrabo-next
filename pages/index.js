import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <h1>Sistema de Gestão Brabo</h1>
        <p>Logado como: {session.user.email}</p>

        {session.user.image && (
          <Image
            src={session.user.image}
            alt="Avatar"
            width={120}
            height={120}
            style={{ borderRadius: "50%" }}
          />
        )}

        <div style={{ marginTop: 16 }}>
          <button onClick={() => signOut()}>Sair (Sign Out)</button>
          <span style={{ margin: "0 8px" }} />
          <Link href="/dashboard">Ir para o Dashboard</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>Sistema de Gestão Brabo</h1>
      <p>Você não está logado.</p>
      <button onClick={() => signIn("google")}>Entrar com o Google</button>
    </div>
  );
}
