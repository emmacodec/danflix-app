import React from 'react'
import Main from '../components/Main';
import Row from '../components/Row';
import request from '../Request';


const Home = () => {
  return (
    <>
      <Main />
      <Row rowId='1' title= 'Up Coming' fetchUrl={request.requestUpcoming} />
      <Row rowId='2' title= 'Horror' fetchUrl={request.requestHorror} />
      <Row rowId='3' title= 'Popular' fetchUrl={request.requestPopular} />
      <Row rowId='4' title= 'Top Rated' fetchUrl={request.requestTopRated} />
      <Row rowId='5' title= 'Trending' fetchUrl={request.requestTrending} />
    </>
  )
}

export default Home;
