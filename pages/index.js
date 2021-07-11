import React from "react";
import Layout from "../components/layout/Layout";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Sunebelle</title>
        <meta name="description" content="Sunebelle's portfolio!" />
      </Head>
      <Layout />
    </>
  );
};

export default index;
