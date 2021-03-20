import Layout from "../src/components/layout";
import Navigation from "../src/components/navigation";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Navigation />
      <section className={utilStyles.headingMd && utilStyles.container}>
        <p>
          A front-end web developer as hobbiest (yet), this blog is created
          using <a href="https://nextjs.org/">Next</a> framework and{" "}
          <a href="https://www.typescriptlang.org/">Typescript</a>.
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
