import {Grid, Typography, makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    padding: '10px'
  },
  details: {
    cursor: 'pointer'
  }
})

export function DetailsCard(props) {
  const {data, isAmp} = props;
  const classes = useStyle();
  return (
    <Grid item xs={12} container direction='row' className={classes.container}>
      <Grid item xs={12}>
        <Typography component='h3'>{data.title}</Typography>
      </Grid>
      {isAmp ? (<Grid item xs={12} sm={12} md={6} lg={6}>
        <img width='100%' src={data.image} alt={data.title} />
      </Grid>) : (<Grid item xs={12} sm={12} md={6} lg={6}>
        <img width='250px' src={data.image} alt={data.title} />
      </Grid>)}
      <Grid container direction='row' alignItems='center' className={classes.details}>
        <Grid item xs={12} sm={2} md={1} lg={1}>
          <Typography component='h2'>Price: </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={10} lg={11}>
        &emsp;<Typography>{data?.price}</Typography>
        </Grid>
      </Grid>
      <Grid container direction='row' alignItems='center' className={classes.details}>

        <Grid item xs={12} sm={2} md={1} lg={1}>
          <Typography component='h2'>Description: </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={10} lg={11}>
        &emsp;<Typography>{data?.description}</Typography>
        </Grid>
      </Grid>
   </Grid>
  )
}
