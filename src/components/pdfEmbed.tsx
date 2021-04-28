import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const EmbedPdf = () => (
  <Box borderTop={2} mt={2}>
    <Box mb={2} textAlign="center">
      <Typography variant="h4">My Resume</Typography>
    </Box>
    <embed
      src="./resume.pdf"
      width="100%"
      height="500px"
      type="application/pdf"
    />
  </Box>
);

export default EmbedPdf;
