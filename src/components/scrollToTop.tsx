import Fab from "@mui/material/Fab";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactElement;
}

const ScrollTop = ({ children }: Props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 700,
  });

  const handleClick = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={(theme) => ({
          position: "fixed",
          bottom: theme.spacing(3),
          right: theme.spacing(3),
        })}
      >
        {children}
      </Box>
    </Zoom>
  );
};

const ScrollToTop = () => (
  <ScrollTop>
    <Fab color="secondary" size="small" aria-label="scroll back to top">
      <KeyboardArrowUpIcon />
    </Fab>
  </ScrollTop>
);

export default ScrollToTop;
