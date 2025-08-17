import { SessionProvider } from "next-auth/react"
import '../styles/globals.css' // Mantenha os estilos globais, se houver

// O Componente e as pageProps são recebidos aqui
export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    // O SessionProvider agora envolve todo o site
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}