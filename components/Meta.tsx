import Head from "next/head";

const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={keywords} />
      <meta charSet="utf-8" />
      <link rel="stylesheet" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};
Meta.defaultProps = {
  title: "MovieSide",
  keywords: "movie app, free movies, popular movies ",
  description: "watch movie for free",
};

export default Meta;
