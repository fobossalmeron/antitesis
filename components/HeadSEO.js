import Head from "next/head";
const Meta = props => (
  <Head>
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
    <meta property="og:locale" content="es_MX" />
    {props.image ? (
      <meta property="og:image" content={`${props.image}`} />
    ) : (
      <meta
        property="og:image"
        content="https://www.somosantitesis.com/static/assets/img/og/og.jpg"
      />
    )}
    {props.image && <meta name="twitter:image" content={`${props.image}`} />}
    {props.canonical && <link rel="canonical" href={`${props.canonical}`} />}
  </Head>
);
export default Meta;
