import Link from "next/link";
import {Grid, Typography, makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
  container: {
    margin: '10px 0',    
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
          
            <img width='250px' height='250vh'   src={category.image} alt='Cycle' />
          
        </Grid>
        <Grid className={classes.details}>
          <Typography justify='center'>{category?.category}</Typography>
          <Typography>{category?.title}</Typography>
        </Grid>
        <Grid className={classes.details} container direction='row' justify='center' style={{padding: 0}}>
          {category?.price && <Typography justify='center'>${category?.price}</Typography>}
        </Grid>
      </Grid>
  )
}
