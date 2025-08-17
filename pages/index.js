import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginPage() {
  const { data: session } = useSession()

  // Se o usuário estiver logado, mostre as informações e o botão de sair
  if (session) {
    return (
      <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
        <h1>Bem-vindo ao Sistema de Gestão Brabo!</h1>
        <p>Logado como: {session.user.email}</p>
        <img src={session.user.image} alt="Foto do usuário" style={{ borderRadius: '50%' }} />
        <br />
        <button onClick={() => signOut()} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Sair (Sign Out)
        </button>
      </div>
    )
  }

  // Se não estiver logado, mostre o botão de entrar
  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>Sistema de Gestão Brabo</h1>
      <p>Você não está logado.</p>
      <button onClick={() => signIn("google")} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Entrar com o Google
      </button>
    </div>
  )
}