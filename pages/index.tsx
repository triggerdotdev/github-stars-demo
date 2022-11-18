import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { NextPage } from "next";
import Head from "next/head";
import { BackgroundStars } from "../components/BackgroundStars";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";

const queryClient = new QueryClient();

const Home: NextPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center sm:bg-gradient-to-b from-[#020922]  to-[#2a273f]">
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
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}
