import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ImageCard from './ImageCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));


const RecipiesList = (props) => {
  const classes = useStyles();



  const { data = [], loading = true} = props


  return <div className="container pt-4">
    <div className="d-flex justify-content-end">
      <div className="d-flex flex-direction-col justify-content-end head">
        <label className="heading">Category</label>
        <label className="title">{"Pizzas & Noodles"}</label>
      </div>
    </div>

    {loading ? <div className="h-100 w-100" style={{height: '66.5vh'}}>Loading...</div> : data.length === 0 ? <div style={{height: '66.5vh'}} className="h-100 w-100">No Data</div> :

      <div className="pt-1">
        <Grid container className={classes.root} spacing={2}>
          {/* <Grid item xs={12}> */}
          <Grid container justify="start" spacing={1} xs={12}>
            {data.map((value, idx) => (
              <Grid key={value} xs={3} item>
                <ImageCard data={value} idx={idx} />
              </Grid>
            ))}
          </Grid>
          {/* </Grid> */}
        </Grid>

      </div>}
  </div>

}


export default RecipiesList