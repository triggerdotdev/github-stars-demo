import type { NextPage } from "next";
import Head from "next/head";
import { APIHeroProvider } from "@apihero/react";
import { BackgroundStars } from "../components/BackgroundStars";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";

const Home: NextPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#020922]  to-[#2a273f]">
      <Head>
        <title>GitHub Stars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Footer />
      <BackgroundStars />
    </div>
  );
};

export default function App() {
  return (
    <APIHeroProvider projectKey="cl82yrzj10406f0kwuefxsaxg">
      <Home />
    </APIHeroProvider>
  );
}
