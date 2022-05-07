import type { NextPage } from "next";
import Head from "next/head";
import { HeroHome } from "@/components/HeroHome";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Davide Crestini</title>
        <meta name="description" content="Product & Graphic Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-primary w-screen">
        <div className="w-screen xl:max-w-screen-lg m-auto flex flex-col">
          <HeroHome />
        </div>
      </div>
    </div>
  );
};

export default Home;
