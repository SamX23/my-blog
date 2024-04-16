import { getAllPostIds, getPostData } from "../../../src/lib/posts";
import DateFormatter from "../../../src/components/dateFormatter";
import Box from "@mui/material/Box";

export async function generateMetadata({ params }) {
  const postData = await getPostData(params?.id as string);

  return {
    title: postData.title,
    ogTitle: postData.title,
  };
}

export const generateStaticParams = async () => {
  const paths = getAllPostIds();
  return paths;
};

const Post = async ({ params }) => {
  const postData = await getPostData(params?.id as string);

  return (
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
  );
};

export default Post;
