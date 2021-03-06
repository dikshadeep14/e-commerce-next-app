import Link from "next/link";
import { useRouter } from 'next/router';
import {useState} from "react";
import {Card} from "../layouts/Card";
import SearchBox from "../layouts/SearchBox";
import {Grid, makeStyles} from '@material-ui/core';


function Home({data}) {
  const router = useRouter();
  const useStyle = makeStyles({
    'card-container': {
      boxShadow: `0px 0px 2px 2px teal`,
      margin: `20px`
    }
  })

  const [term, setTerm] = useState("");

  const handleSearch = () => {
    router.push('/search/[term]', `/search/${term}`);
  }

  const handleChange = (e) => {
    setTerm(e.target.value);
  }

  const handleList = (data) => {
    console.log(data);
    router.push('/search/[term]', `/search/${data.category}`);
  }
  const Styles = useStyle();
  return (
    <div className="container">
      <h2 className="title">Trek Cycles</h2>
      <SearchBox handleSearch={handleSearch} handleChange={handleChange} value={term}/>
      <Grid container direction='row'>
        {data?.map((x, i) => {
          return(
        
        <Grid onClick={() => handleList(x)} item xs={12} sm={6} md={4} lg={3} className={Styles['card-container']} key={i}>
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

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/categories");
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}

export default Home
