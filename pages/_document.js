import {Head, Html, Main, NextScript} from 'next/document'
import {SpeedInsights} from "@vercel/speed-insights/next";
import React from 'react';

export default () =>
  <Html>
    <Head>
      <meta name="author" content="All: Roman Ožana; e-mail: roman@ozana.cz"/>
      <link rel="shortcut icon" href="/favicon.svg"/>
      <link rel="author" href="/humans.txt"/>
    </Head>

    <body className="font-sans text-gray-900 antialiased leading-normal tracking-normal">
    <Main/>
    <NextScript/>
    <SpeedInsights/>
    </body>
  </Html>