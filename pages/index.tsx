import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          A front-end web developer as hobbiest (yet), this blog is created by{" "}
          <a href="http://reactjs.org/">React</a> library,{" "}
          <a href="https://nextjs.org/">Next</a> framework using{" "}
          <a href="https://www.typescriptlang.org/">typescript</a>.
        </p>
        <p>
          Or you can see me doing code on my github{" "}
          <a href="https://github.com/SamX23">Github Profile</a>, while living
          in social network on{" "}
          <a href="https://facebook.com/samikalamallah">facebook</a>.
        </p>
      </section>
    </Layout>
  );
}
