import React from 'react'
import Nav from '../components/Nav'
import Banner from '../components/Banner'

import './Homepage.css'
import Row from '../components/Row'
import request from '../Requests'

function Homepage() {


  return (
    <>

    <div className='body'>
    <Nav></Nav>
    <Banner></Banner>

<Row  title="NETFLIX ORGINALS" fetchUrl ={request.fetchNetflixOrginals} isLargeRow />
<Row  title="trending now" fetchUrl ={request.fetchTrending} />
<Row  title="top rated" fetchUrl ={request.fetchTopRated} />
<Row  title="action movies" fetchUrl ={request.fetchActionMovies} />
<Row  title="comedy movies" fetchUrl ={request.fetchComedyMovies} />
<Row  title="horror movies" fetchUrl ={request.fetchHorrorMovies} />
<Row  title="romance movies" fetchUrl ={request.fetchRomanceMovies} />
<Row  title="documentries" fetchUrl ={request.fetchDocumentaries} />







   



    </div>






    </>
  )
}

export default Homepage