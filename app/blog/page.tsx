import Link from "next/link";
import { Metadata } from "next";
import { getSortedPostsData } from "../../src/lib/posts";
import DateFormatter from "../../src/components/dateFormatter";
import Box from "@mui/material/Box";

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
  );
};

export default Blog;
