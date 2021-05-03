import { getInitialProps } from "@expo/next-adapter/document";
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class CustomDocument extends Document {
  static getInitialProps = getInitialProps
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
