import { SessionProvider } from "next-auth/react";
import "../styles/globals.css"; // mantenha se existir

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
