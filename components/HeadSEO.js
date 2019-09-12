import Head from "next/head";
const Meta = props => (
  <Head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
    />
    <link rel="shortcut icon" type="image/x-icon" href="static/favicon.ico" />
    <title>{props.title}</title>
    <meta name="description" content={props.desc} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta
      name="og:description"
      property="og:description"
      content={props.desc}
    />
    <meta property="og:site_name" content="Antitesis Films" />
    <meta property="og:url" content={`${props.canonical}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    {/* <meta name="twitter:site" content="@propernounco" />
    <meta name="twitter:creator" content="@propernounco" /> */}
    <link rel="icon" type="image/png" href="static/images/favicon.ico" />
    <link rel="apple-touch-icon" href="static/images/favicon.ico" />
    {props.image ? (
      <meta property="og:image" content={`${props.image}`} />
    ) : (
      <meta
        property="og:image"
        content="https://www.propernoun.co/static/images/proper-noun-social.png"
      />
    )}
    {props.image && <meta name="twitter:image" content={`${props.image}`} />}
    {props.canonical && <link rel="canonical" href={`${props.canonical}`} />}
  </Head>
);
export default Meta;
