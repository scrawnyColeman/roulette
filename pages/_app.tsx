import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import "../styles/globals.css";

const defaultChaosLevel = 5;
const invalidChaosLevel = 11;
const validChaosLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function cleanChaosLevel(c: string) {
  if (!c) {
    return defaultChaosLevel;
  }

  let chaosLevel = parseInt(c);
  if (!validChaosLevels.includes(chaosLevel)) {
    return invalidChaosLevel;
  }

  return chaosLevel;
}

function MyApp({ Component, pageProps }: AppProps) {
  const { query } = useRouter();
  const chaosLevel = cleanChaosLevel(query.c as string);
  return <Component {...pageProps} chaosLevel={chaosLevel} />;
}

export default MyApp;
