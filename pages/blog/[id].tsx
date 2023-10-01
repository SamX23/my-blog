import { GetStaticProps, GetStaticPaths } from "next";
import makeStyles from "@mui/styles/makeStyles";
import Layout from "../../src/components/layout";
import { getAllPostIds, getPostData } from "../../src/components/lib/posts";
import DateFormatter from "../../src/components/dateFormatter";

type Props = {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
};

const useStyles = makeStyles({
  title: {
    fontSize: "2rem",
    lineHeight: "1.3",
    fontWeight: 700,
    letterSpacing: "-0.05rem",
    margin: "1rem 0",
  },
});

const Post = ({ postData }: Props) => {
  const classes = useStyles();
  return (
    <Layout blog siteTitle={postData.title}>
      <article>
        <h1 className={classes.title}>{postData.title}</h1>
        <div>
          <DateFormatter dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export default Post;
