import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "styles/global";

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
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="all" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/assets/img/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/assets/img/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/assets/img/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/assets/img/favicon/safari-pinned-tab.svg"
            color="#000000"
          />
          <link
            rel="shortcut icon"
            href="/static/assets/img/favicon/favicon.ico"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta
            name="msapplication-config"
            content="/static/assets/img/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta name="geo.region" content="CDMX" />
          <meta name="geo.placename" content="Antitesis Films" />
          <GlobalStyles />
          {this.props.styleTags}
        </Head>
        <body>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="outsideLoader"
            viewBox="0 0 415.2 500"
          >
            <path d="M20.9 456.5L2.1 494.2h14.7l2.9-6.2h21.7l2.9 6.2H60l-19.9-37.8H20.9zm3.3 22.3l6.2-13 6.4 13H24.2zM100.9 478L79 456.5H62.9v37.7h14.2v-22.8l23.8 22.8h14.5v-37.7h-14.5zM119.9 466.8h16.3v27.4h14.5v-27.4H167v-10.3h-47.1zM171.8 456.5h14.5v37.8h-14.5zM172.6 454.2h13.2l5-7.8h-14.1zM191 466.8h16.3v27.4h14.5v-27.4h16.3v-10.3H191zM257.1 479.6H284v-9h-26.9v-4.8h27.5v-9.3h-41.7v37.7H285v-9.4h-27.9zM319.7 470.1l-6.8-.2c-7-.2-8.3-1.4-8.3-2.9 0-1.4.8-2.9 8.3-2.9h.4c8.3 0 9.1 2.7 9.1 3.9h15.7v-.4c0-6-4.3-12-22.9-12h-4.6c-17.6 0-21.7 5.4-21.7 11.6v.4c0 5.8 3.9 11 18.6 11.4l7 .2c7.9.2 8.9 1.4 8.9 3.3s-1.2 3.5-9.3 3.5h-.4c-8.3 0-9.3-3.3-9.5-5.4h-15.9v.4c0 5 2.3 13.4 23.1 13.4h4.5c19.8 0 23.4-6.4 23.4-12.8v-.6c.3-7.1-5.3-10.4-19.6-10.9zM343.9 456.5h14.5v37.8h-14.5zM393.5 470.1l-6.8-.2c-7-.2-8.3-1.4-8.3-2.9 0-1.4.8-2.9 8.3-2.9h.4c8.3 0 9.1 2.7 9.1 3.9h15.7v-.4c0-6-4.3-12-22.9-12h-4.5c-17.6 0-21.7 5.4-21.7 11.6v.4c0 5.8 3.9 11 18.6 11.4l7 .2c7.9.2 8.9 1.4 8.9 3.3s-1.2 3.5-9.3 3.5h-.4c-8.3 0-9.3-3.3-9.5-5.4h-15.9v.4c0 5 2.3 13.4 23.1 13.4h4.5c19.8 0 23.4-6.4 23.4-12.8v-.6c.3-7.1-5.2-10.4-19.7-10.9z" />
            <g id="spin">
              <path d="M63.2 224.8a146.5 146.5 0 0 0 46.6 85.6v59.9l.4.2a198.4 198.4 0 0 0 48.7 20l1.2.4v-50.6c15.1 5.2 30.7 7.9 46.6 7.9h2c15.9-.2 31.6-2.7 46.6-7.9v50.6l1.2-.4a191.5 191.5 0 0 0 48.7-20l.4-.2v-59.9c2.1-1.9 3.9-3.5 5.6-5.4a146 146 0 0 0 41-79.8v107l1.6-1.9a193.7 193.7 0 0 0 48.8-128.8v-.6c0-47.5-17.3-93.4-48.7-128.9l-1.6-1.9v107.2a144.8 144.8 0 0 0-46.6-85.2V32.2l-.4-.2a190.9 190.9 0 0 0-48.7-20l-1.2-.5v50.6a142.5 142.5 0 0 0-46.6-7.9h-2c-15.9.2-31.6 2.7-46.6 7.9V11.3l-1.2.4a191.5 191.5 0 0 0-48.7 20l-.4.2v59.9c-2.1 1.9-3.9 3.5-5.6 5.4a143.4 143.4 0 0 0-41 80V69.8l-1.9 2.1a195.4 195.4 0 0 0-.1 258.6l1.6 1.9V224.8h.3zm194-159.9a145 145 0 0 1 46.6 27.9v88.9a97.3 97.3 0 0 0-46.6-65.3V64.9zm0 220.9a97.3 97.3 0 0 0 46.6-65.3v88.9a145 145 0 0 1-46.6 27.9v-51.5zm-97.1-168.5a95.5 95.5 0 0 1 47.6-12.6c16.7 0 33.2 4.3 47.4 12.6v54.2a55.5 55.5 0 0 0-46.6-26.4h-2a55.4 55.4 0 0 0-46.6 26.4v-54.1l.2-.1zm0 113a55.5 55.5 0 0 0 46.6 26.4h2a55.4 55.4 0 0 0 46.6-26.4v54.3a95.5 95.5 0 0 1-95 0v-54.3h-.2zM111.6 92.8a145 145 0 0 1 46.6-27.9v51.5a97.3 97.3 0 0 0-46.6 65.3V92.8zm0 127.6a97.3 97.3 0 0 0 46.6 65.3v51.5a145 145 0 0 1-46.6-27.9v-88.9z" />
              <path
                fill="none"
                d="M402.6 201.1a195 195 0 1 0-390 0 195 195 0 1 0 390 0z"
              />
            </g>
          </svg>
          <div id="revealer" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
