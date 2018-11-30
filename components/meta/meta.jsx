import React from 'react';
import Head from 'next/head';

const Meta = () => (
  <React.Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      @import url('https://fonts.googleapis.com/css?family=Lora|Montserrat');

      * {
        outline-color: #2ec4b6;
      }

      html {
        font-size: 16px;
        font-family: 'Lora', serif;
      }
      @media screen and (min-width: 320px) {
        html {
          font-size: calc(16px + 6 * ((100vw - 320px) / 680));
        }
      }
      @media screen and (min-width: 1000px) {
        html {
          font-size: 22px;
        }
      }

      body {
        background: #fdfffc;
        color: #011627;
        padding-bottom: 50px;
        margin: 0;
      }

      a {
        color: #2ec4b6;
      }

      a:hover,
      a:focus,
      a:active {
        color: #1e7d74;
      }

      a,
      button {
        transition: color 0.2s ease-in-out;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      .header,
      .heading {
        font-family: 'Montserrat', sans-serif;
      }
    `}</style>
  </React.Fragment>
);

export default Meta;
