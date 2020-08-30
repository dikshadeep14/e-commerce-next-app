import Link from "next/link";
import { useRouter } from 'next/router';
import {Card} from "../../layouts/Card";
import SearchBox from "../../layouts/SearchBox";
import {Grid, makeStyles} from '@material-ui/core';

function Search({props}) {
  const router = useRouter();
  const useStyle = makeStyles({
    'card-container': {
      boxShadow: `0px 0px 2px 2px teal`,
      margin: `20px`
    }
  })
  const handleCard = (x) => {
    console.log('x.....', x);
    e.preventDefault();
    router.push('/details/[term]', `/details/${x}`);
  }
  console.log('x..... in search page');
  const Styles = useStyle();
  return (
    <div className="container">
      <h2 className="title">Trek Cycles</h2>
      <SearchBox />
      <Grid container direction='row'>
        {console.log('outside map.....')}
        {props?.data?.map((x, i) => {
          return(
        
        <Grid onClick={() => handleCard(x.id)} item xs={12} sm={6} md={4} lg={3} className={Styles['card-container']} key={i}>
         {console.log('inside map.....')}
            <Card category={x} />
        </Grid>
        )})}
      </Grid>
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .title {
          text-decoration: underline;
          color: teal;
          letter-spacing: 0.1rem;
          word-spacing: 0.2rem;
        }
        .card-container: {
          box-shadow: 0px 0px 2px 2px teal;
          margin: 20px;
        }
      `}</style>
    </div>
  )
}

Search.getInitialProps = async(context) => {
  const term = context.query.term;
  const res = await fetch(`http://localhost:3000/api/search/${term}`);
  const data = await res.json();
  return {
    props: {
      data: data
    }
  };
}

export default Search
