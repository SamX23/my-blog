import Link from "next/link";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles({
  backToHome: {
    margin: "1rem 0",
  },
});

const BackToHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.backToHome}>
      <Link href="/">← Back to home</Link>
    </div>
  );
};

export default BackToHome;
