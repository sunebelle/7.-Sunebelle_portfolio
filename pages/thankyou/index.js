import React from "react";
import Head from "next/head";
import Navbar from "../../components/layout/Navbar";
import Thankyou from "../../components/main/Thankyou";

const ThankPage = () => {
  const message =
    "I will respond you as quickly as possible. Untill then stay safe!";
  return (
    <>
      <Head>
        <title>Sunebelle</title>
        <meta name="description" content="Sunebelle's thanks!" />
      </Head>
      <Navbar />
      <Thankyou message={message} />
    </>
  );
};

export default ThankPage;
