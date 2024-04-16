import Link from "next/link";
import {  Metadata } from "next";
import { getSortedPostsData } from "../../src/components/lib/posts";
import DateFormatter from "../../src/components/dateFormatter";
import Layout from "../../src/components/layout";
import { Box } from "@mui/material";

type AllPostProps = {
  date: string;
  title: string;
  id: string;
};

export const metadata: Metadata = {
  title: "The digital writing of Sami",
  openGraph: {
    title: "The digital writing of Sami",
  },
};

const Blog = async () => {
  const allPostsData: AllPostProps[] = getSortedPostsData();

  return (
    <Layout blog>
      <Box
        sx={{
          fontSize: "1.2rem",
          lineHeight: 1.5,
          paddingTop: "1px",
        }}
      >
        <Box
          sx={{
            fontSize: "1.5rem",
            lineHeight: 1.4,
            margin: "1rem 0",
          }}
        >
          Blog
        </Box>
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
      </Box>
    </Layout>
  );
};

export default Blog;
