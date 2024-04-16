import Layout from "../../../src/components/layout";
import { getAllPostIds, getPostData } from "../../../src/components/lib/posts";
import DateFormatter from "../../../src/components/dateFormatter";
import { Box } from "@mui/material";

export async function generateMetadata({ params }) {
  const postData = await getPosts(params?.id as string);

  return {
    title: postData.title,
    ogTitle: postData.title,
  };
}

const Post = async ({ params }) => {
  const postData = await getPosts(params?.id as string);

  return (
    <Layout blog>
      <article>
        <Box
          sx={{
            fontSize: "2rem",
            lineHeight: "1.3",
            fontWeight: 700,
            letterSpacing: "-0.05rem",
            margin: "1rem 0",
          }}
        >
          {postData.title}
        </Box>
        <div>
          <DateFormatter dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};

export const generateStaticParams = async () => {
  const paths = getAllPostIds();
  return paths;
};

export const getPosts = async (id: string) => {
  const postData = await getPostData(id);
  return postData;
};

export default Post;
