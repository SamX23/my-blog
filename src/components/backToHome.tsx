import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  backToHome: {
    margin: "3rem 0 0",
  },
});

const BackToHome = () => {
  const classes = useStyles();
  return (
    <div className={classes.backToHome}>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </div>
  );
};

export default BackToHome;
