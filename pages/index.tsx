import type { NextPage } from "next";
import { useRouter } from "next/router";

import Header from "../src/components/Header";
import Roulette from "../src/components/Roulette";
import SEO from "../src/components/SEO";

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

const Home: NextPage = () => {
  const { query } = useRouter();
  const chaosLevel = cleanChaosLevel(query.c as string);

  return (
    <>
      <SEO />
      <main>
        <Header chaosLevel={chaosLevel} />
        <Roulette />
      </main>
    </>
  );
};
export default Home;
