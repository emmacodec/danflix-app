import React from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import request from '../Request';


const Home = () => {
  return (
    <>
      <Main />
      <Row title= 'Up Coming' fetchUrl={request.requestUpcoming} />
      <Row title= 'Horror' fetchUrl={request.requestHorror} />
      <Row title= 'Popular' fetchUrl={request.requestPopular} />
      <Row title= 'Top Rated' fetchUrl={request.requestTopRated} />
      <Row title= 'Trending' fetchUrl={request.requestTrending} />
    </>
  )
}

export default Home;
