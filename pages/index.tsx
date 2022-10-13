import type { NextPage } from "next";

import Header from "../src/components/Header";
import SEO from "../src/components/SEO";

const Home: NextPage = () => (
  <>
    <SEO />
    <main>
      <Header chaosLevel={5} />
    </main>
  </>
);

export default Home;
