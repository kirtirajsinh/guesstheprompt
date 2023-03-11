import "@/styles/globals.css";
import Nav from "components/Nav";
import { Luckiest_Guy } from "@next/font/google";
import ChallengeProvider from "components/ChallengeProvider";

const luckestGuy = Luckiest_Guy({
  subsets: ["latin"],
  variable: "--font-luckiestGuy",
  weight: "400",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${luckestGuy.variable} bg-p-bg text-p-text h-screen`}>
      <ChallengeProvider>
        <Nav />
        <Component {...pageProps} />
      </ChallengeProvider>
    </main>
  );
}
