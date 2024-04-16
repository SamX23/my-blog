import { Box } from "@mui/material";
import Link from "next/link";

const BackToHome = () => {
  return (
    <Box sx={{
      margin: "1rem 0",
    }}>
      <Link href="/">← Back to home</Link>
    </Box>
  );
};

export default BackToHome;
