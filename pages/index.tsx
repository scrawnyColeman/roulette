import type { NextPage } from "next";

import Header from "../src/components/Header";
import Roulette from "../src/components/Roulette";
import SEO from "../src/components/SEO";

type Props = {
  chaosLevel: number;
};

const Home: NextPage<Props> = ({ chaosLevel }) => {
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
