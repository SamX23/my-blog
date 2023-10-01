import Link from "next/link";
import { GetStaticProps } from "next";
import makeStyles from "@mui/styles/makeStyles";
import { getSortedPostsData } from "../../src/components/lib/posts";
import DateFormatter from "../../src/components/dateFormatter";
import Layout from "../../src/components/layout";
import { defaultTitle } from "../../src/mock/data";

type Props = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

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

const Blog = ({ allPostsData }: Props) => {
  const classes = useStyles();
  const blogTitle = `The digital writing of Sami | ${defaultTitle}`;

  return (
    <Layout blog siteTitle={blogTitle}>
      <section className={classes.container}>
        <h2 className={classes.title}>Blog</h2>
        <ul>
          {allPostsData?.map(({ id, date, title }, index) => (
            <li key={index}>
              <Link href={`/blog/${id}`}>{title}</Link>
              <br />
              <small>
                <DateFormatter dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default Blog;
