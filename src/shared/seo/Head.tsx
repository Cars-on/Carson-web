import React from 'react';
import NextHead from 'next/head';

const Head: React.FC = () => (
  <NextHead>
    <link rel="icon" href="/favicon.svg" />
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
    <meta property="og:image" content="https://i.imgur.com/ZD8FVUk.png" />
    <meta
      property="og:image:secure_url"
      content="https://i.imgur.com/ZD8FVUk.png"
    />

    <meta name="twitter:card" content="summary" />
    <meta
      name="twitter:description"
      content="Encontre seu carro online no conforto da sua casa"
    />
    <meta name="twitter:title" content="Cars On" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Archivo:wght@100;200;300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
  </NextHead>
);

export default Head;
