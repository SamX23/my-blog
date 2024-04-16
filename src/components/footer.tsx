import Grid from "@mui/material/Grid";
import { socialMedia } from "../constant/data";

const Footer = () => (
  <footer>
    <hr />
    <Grid
      sx={{
        padding: "1em",
        "@media(max-width: 700px)": {
          textAlign: "center",
        },
      }}
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid
        item
        xs
        sx={{
          paddingRight: "1em",
          "& span": {
            fontWeight: "bold",
          },
        }}
      >
        Ngoding with{" "}
        <span role="img" aria-label="love">
          ♥️
        </span>{" "}
        by <span>Kang Sami</span>
      </Grid>
      <Grid
        item
        xs
        sx={{
          textAlign: "right",
          "& a": {
            marginLeft: ".5em",
            fontWeight: "500",
          },
          "@media(max-width: 700px)": {
            borderLeft: "1px solid black",
            textAlign: "center",
            display: "grid",
            "& a": {
              margin: "unset",
            },
          },
        }}
      >
        {socialMedia.networks.map((item) => (
          <a key={item.id} href={item.url}>
            {item.name}
          </a>
        ))}
      </Grid>
    </Grid>
  </footer>
);
export default Footer;
