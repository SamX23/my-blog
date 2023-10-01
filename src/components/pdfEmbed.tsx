import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const EmbedPdf = () => (
  <Box mt={2}>
    <Box mb={2} pb={2} borderBottom={2} textAlign="center">
      <Typography variant="h4">My Resume</Typography>
    </Box>
    <embed
      src="./files/resume.pdf"
      width="100%"
      height="500px"
      type="application/pdf"
    />
  </Box>
);

export default EmbedPdf;
