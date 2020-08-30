import Link from "next/link";
import {Grid, Typography, makeStyles, Divider} from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    padding: '10px'
  }
})

export function MainPage(props) {
  const {result} = props;
  const classes = useStyle();
  return (
    <Grid container className={classes.container} justify="center">
      <Link as={`/songs/${result.trackName}`} href="/[songs]/[term]">
        <Typography>{result.trackName}</Typography>
      </Link>
      &emsp;
      <Typography>{'-'}</Typography>
      &emsp;
      <Link as={`/songs/${result.artistName}`} href="/[songs]/[term]">
        <Typography>{result.artistName}</Typography>
      </Link>
      <Divider/>
    </Grid>
  )
}
