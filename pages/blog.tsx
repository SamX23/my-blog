import Link from "next/link";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../src/components/lib/posts";
import Date from "../src/components/date";
import Layout from "../src/components/layout";
import { defaultTitle } from "../src/mock/data";
import utilStyles from "../styles/utils.module.css";

export default function Blog({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  const blogTitle = `The digital writing of Sami | ${defaultTitle}`;

  return (
    <Layout siteTitle={blogTitle}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
