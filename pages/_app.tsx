import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import "../styles/globals.css";

const defaultChaosLevel = 5;
const invalidChaosLevel = 11;
const validChaosLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const defaultChartOptions = [
  {
    content: "Libs",
    background: "red",
  },
  {
    content: "J",
    background: "cyan",
  },
  {
    content: "Thomas",
    background: "orange",
  },
];

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

function cleanOptions(o: string | string[]) {
  const colours = [
    "orange",
    "cyan",
    "yellow",
    "hotpink",
    "green",
    "lavender",
    "orchid",
    "purple",
    "salmon",
    "red",
  ];
  if (!Array.isArray(o)) {
    return defaultChartOptions;
  }

  return o.map((opt, i) => ({
    content: opt,
    background: colours[i % colours.length],
  }));
}
function MyApp({ Component, pageProps }: AppProps) {
  const { query } = useRouter();
  const chaosLevel = cleanChaosLevel(query.c as string);
  const options = cleanOptions(query.o as string[]);

  return <Component {...pageProps} chaosLevel={chaosLevel} options={options} />;
}

export default MyApp;
