import React from 'react';
import NextHead from 'next/head';

const Head: React.FC = () => (
  <NextHead>
    <link rel="icon" href="/favicon.png" />
    <meta name="theme-color" content="#5F41D9" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Cars On</title>
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Cars On" />
    <meta
      property="og:description"
      content="Encontre seu carro online no conforto da sua casa"
    />
    <meta property="og:url" content="https://cars-on.herokuapp.com/" />
    <meta property="og:site_name" content="carson" />
    <meta property="og:image" content="https://imgur.com/a/tAy9mNB" />
    <meta
      property="og:image:secure_url"
      content="https://imgur.com/a/tAy9mNB"
    />

    <meta name="twitter:card" content="summary" />
    <meta
      name="twitter:description"
      content="Encontre seu carro online no conforto da sua casa"
    />
    <meta name="twitter:title" content="Cars On" />
  </NextHead>
);

export default Head;
