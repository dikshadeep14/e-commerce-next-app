import {Grid, Typography, makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    padding: '10px'
  },
  details: {
    cursor: 'pointer'
  }
})

export function Details(props) {
  const {data} = props;
  const classes = useStyle();
  return (
    <Grid item xs={12} container direction='row' className={classes.container}>
      <Grid item xs={12}>
        <Typography component='h3'>{data[0].title}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <img width='100%' src={data[0].image} alt={data[0].title} />
      </Grid>
      <Grid  className={classes.details}>
        <Typography component='h2'>Description: </Typography>
        &emsp;<Typography>{data[0]?.description}</Typography>
        <Grid container direction='row'>
          <Typography>Price: </Typography>
          &emsp;<Typography>{data[0]?.price}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
