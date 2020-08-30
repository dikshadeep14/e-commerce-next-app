import React from 'react';
import { useAmp } from 'next/amp';
import {Grid} from "@material-ui/core"
import {DetailsCard} from '../../layouts/Details'; 


export const config = { amp: 'hybrid' };

function Details({data}) {
  const isAmp = useAmp();
  return(
      <Grid>
        <DetailsCard isAmp={isAmp} data={data[0]}/>
      </Grid>
  )
}

export default Details;

export const getServerSideProps = async (ctx) => {
  const {query} = ctx;
  const res = await fetch(`http://localhost:3000/api/detail/${query.id}`);
  const data = await res.json();
  return {
    props: {data}
  }
}
