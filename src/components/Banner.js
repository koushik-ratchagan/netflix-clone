
import "./banner.css";
import request from '../Requests';
import axios from "../axios"

import { useState,useEffect } from 'react';



function Banner() {

    const [movies, setMovies] = useState([]);

    useEffect(() =>{

        async function fetchData(){
            const req = await axios.get(request.fetchNetflixOrginals);

            setMovies(
                //req.data.result[Math.floor(Math.random() * req.data.result.length - 1)]

                req.data.results[Math.trunc(Math.random() * req.data.results.length - 1 )]
            );

            return req

       
        }

        fetchData()
    },[]);






    const truncate = (string, n)=>{

    return string?.length > n ? string.substr(0, n - 1) + "..." : string


    }


  return (
    <>
    <header className='banner' style={{
        backgroundImage : `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movies?.backdrop_path}")`,
       backgroundSize: "cover",
       backgroundPosition:"top"
 }}>

<div className='banner-caption'>
    <h1 className='banner-title'>{movies?.title || movies?.name || movies?.orginal_name }</h1>

    <p className='banner-text'>{ truncate (`${movies?.overview}` , 230)}</p>
<div className='btn-wrapper'>
<button className='banner-btn'>play</button>
     <button className='banner-btn'>my list</button>

</div>




</div>

<div className="gradient-section"></div>

    </header>
    
    
    </>
  )
}

export default Banner