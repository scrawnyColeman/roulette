import type { NextPage } from "next";
import { useRouter } from "next/router";

import Header from "../src/components/Header";
import Roulette from "../src/components/Roulette";
import SEO from "../src/components/SEO";

const Home: NextPage = () => {
  const { query } = useRouter();
  const chaosLevel = +(query.c as string);

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
