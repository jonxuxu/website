import Head from "next/head";
// import "../style.less";

export function getStaticProps() {
  return {
    props: { fullscreen: true }, // will be passed to the page component as props
  };
}

const Home = () => {
  return (
    <div>
      <Head>
        <title>Jonathan Xu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>CRINNNNNNNNNNNNGEE</div>
    </div>
  );
};

export default Home;
