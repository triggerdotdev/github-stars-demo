import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

async function initProxy() {
  const projectKey = "clame93mz0004h8fawc876xhq";
  if (typeof window !== "undefined") {
    const { setupWorker } = await import("apihero-js");
    //update the allow list with the APIs you're using
    await setupWorker({
      allow: ["https://api.github.com/*"],
      url: "https://proxy-staging.apihero.run",
      projectKey,
      env: process.env.NODE_ENV,
    }).start();
  } else {
    const { setupProxy } = await import("apihero-js/node");
    await setupProxy({
      projectKey,
      env: process.env.NODE_ENV,
      url: "https://proxy-staging.apihero.run",
    }).start();
  }
}
initProxy();

export default MyApp;
