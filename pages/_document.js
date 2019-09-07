import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "../styles/global";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <GlobalStyles />
          {this.props.styleTags}
        </Head>
        <body>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 391"             id="outsideLoader"
>
  <path id="back" fill="#f4f4f4" d="M50.6 219.2a146.5 146.5 0 0 0 46.6 85.6v59.9l.4.2a198.4 198.4 0 0 0 48.7 20l1.2.4v-50.6c15.1 5.2 30.7 7.9 46.6 7.9h2c15.9-.2 31.6-2.7 46.6-7.9v50.6l1.2-.4a191.5 191.5 0 0 0 48.7-20l.4-.2v-59.9c2.1-1.9 3.9-3.5 5.6-5.4a146 146 0 0 0 41-79.8v107l1.6-1.9A193.7 193.7 0 0 0 390 195.9v-.6c0-47.5-17.3-93.4-48.7-128.9l-1.6-1.9v107.2a144.8 144.8 0 0 0-46.6-85.2V26.6l-.4-.2a190.9 190.9 0 0 0-48.7-20l-1.2-.5v50.6a142.5 142.5 0 0 0-46.6-7.9h-2c-15.9.2-31.6 2.7-46.6 7.9V5.7l-1.2.4a191.5 191.5 0 0 0-48.7 20l-.4.2v59.9c-2.1 1.9-3.9 3.5-5.6 5.4a143.4 143.4 0 0 0-41 80V64.2l-1.9 2.1a195.4 195.4 0 0 0-.1 258.6l1.6 1.9V219.2h.3zm194-159.9a145 145 0 0 1 46.6 27.9v88.9a97.3 97.3 0 0 0-46.6-65.3V59.3zm0 220.9a97.3 97.3 0 0 0 46.6-65.3v88.9a145 145 0 0 1-46.6 27.9v-51.5zm-97.1-168.5a95.5 95.5 0 0 1 47.6-12.6c16.7 0 33.2 4.3 47.4 12.6v54.2a55.5 55.5 0 0 0-46.6-26.4h-2a55.4 55.4 0 0 0-46.6 26.4v-54.1l.2-.1zm0 113a55.5 55.5 0 0 0 46.6 26.4h2a55.4 55.4 0 0 0 46.6-26.4V279a95.5 95.5 0 0 1-95 0v-54.3h-.2zM99 87.2a145 145 0 0 1 46.6-27.9v51.5A97.3 97.3 0 0 0 99 176.1V87.2zm0 127.6a97.3 97.3 0 0 0 46.6 65.3v51.5A145 145 0 0 1 99 303.7v-88.9z"/>
  <path fill="none" d="M390 195.5a195 195 0 1 0-390 0 195 195 0 1 0 390 0z"/>
</svg>
          {/* <svg
            id="outsideLoader"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 289 500"
          >
            <path
              id="back"
              d="M18.9 482.4V17.1h251.7V87L96.1 85l-2.7 129.8h155.8V280H93.4l3.3 202.4H18.9z"
            />
            <path
              id="front"
              d="M18.9 482.4V17.1h251.7V87L96.1 85l-2.7 129.8h155.8V280H93.4l3.3 202.4H18.9z"
            />
          </svg> */}
          <div id="revealer"/>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
