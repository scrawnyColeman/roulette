import type { NextPage } from "next";

import Header from "../src/components/Header";
import Roulette from "../src/components/Roulette";
import SEO from "../src/components/SEO";
import Confetti from "../src/components/Confetti";

type Props = {
  chaosLevel: number;
  options: string[];
};

const Home: NextPage<Props> = ({ chaosLevel, options }) => {
  return (
    <>
      <SEO />
      <main>
        <Header chaosLevel={chaosLevel} />
        {chaosLevel <= 10 && (
          <>
            <Roulette options={options} />
            <Confetti chaosLevel={chaosLevel} />
          </>
        )}
      </main>
    </>
  );
};
export default Home;
