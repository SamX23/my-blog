import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const ScrollToBottom = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingBottom: "1rem",
      }}
    >
      <Link
        href="#content"
        sx={{
          position: "relative",
          display: "block",
          width: "35px",
          height: "55px",
          margin: "auto",
          border: "3px solid #0070f3",
          borderRadius: "23px",
        }}
        aria-label="scroll to bottom"
      >
        <Box
          sx={{
            backgroundColor: "#0070f3",
            position: "absolute",
            display: "block",
            top: "29%",
            left: "50%",
            width: "8px",
            height: "8px",
            margin: "-4px 0 0 -4px",
            borderRadius: "50%",
            animation: `$animate 2000ms linear infinite`,
          }}
        >
          &nbsp;
        </Box>
      </Link>
    </Box>
  );
};

export default ScrollToBottom;
