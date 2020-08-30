import {useRouter} from "next/router";

function Details({props}) {
  console.log('props in details', props)
  return(
      <div>
        <Details data={props?.data} />
      </div>
  )
}

Details.getInitialProps = async (ctx) => {
  console.log('ctx', ctx);
  const res = await fetch(`http://localhost:3000/api/detail/19`);
  const data = await res.json();
  return {
    props: {data}
  }
}

export default Details;
