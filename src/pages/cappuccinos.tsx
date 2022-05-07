import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

const DynamicCappuccinosMap = dynamic(
  () => import("@/components/CappuccinosMap"),
  { ssr: false }
);

const CappuccinosPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Davide Crestini</title>
        <meta name="description" content="Product & Graphic Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-screen">
        <DynamicCappuccinosMap />
      </div>
    </div>
  );
};

export default CappuccinosPage;
