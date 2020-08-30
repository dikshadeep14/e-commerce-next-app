import Link from "next/link";
import {Grid, Typography, makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    margin: '10px 0',
    // border: '2px solid teal',
    
  },
  details: {
    cursor: 'pointer',
    textTransform: 'uppercase',
    padding: '20px 0 0 0',
    color: 'teal'
  }
})

export function Card(props) {
  const {category} = props;
  const classes = useStyle();
  return (
      <Grid item xs={12} container className={classes.container} justify="center">
        <Grid item xs={12} container display='row' justify='center'>
          
            <img width='fit-content' height='250vh'   src={category.image} alt='Cycle' />
          
        </Grid>
        <Grid className={classes.details}>
          <Typography>{category?.category}</Typography>
          <Typography>{category?.title}</Typography>
        </Grid>
        <Grid className={classes.details} style={{padding: 0}}>
          {category?.price && <Typography>${category?.price}</Typography>}
        </Grid>
      </Grid>
  )
}