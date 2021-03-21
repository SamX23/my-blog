import Link from "next/link";
import { GetStaticProps } from "next";
import { makeStyles } from "@material-ui/core/styles";
import { getSortedPostsData } from "../../src/components/lib/posts";
import Date from "../../src/components/date";
import Layout from "../../src/components/layout";
import { defaultTitle } from "../../src/mock/data";

const useStyles = makeStyles({
  container: {
    fontSize: "1.2rem",
    lineHeight: 1.5,
    paddingTop: "1px",
  },
  title: {
    fontSize: "1.5rem",
    lineHeight: 1.4,
    margin: "1rem 0",
  },
});

export default function Blog({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  const classes = useStyles();
  const blogTitle = `The digital writing of Sami | ${defaultTitle}`;

  return (
    <Layout siteTitle={blogTitle}>
      <section className={classes.container}>
        <h2 className={classes.title}>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
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
