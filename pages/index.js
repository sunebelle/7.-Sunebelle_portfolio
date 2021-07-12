import React from "react";
import Layout from "../components/layout/Layout";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>Sunebelle</title>
        <meta name="description" content="Sunebelle's portfolio!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon_io/favicon-16x16.png"
        />
      </Head>
      <Layout />
    </>
  );
};

export default index;
