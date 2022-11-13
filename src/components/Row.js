import axios from '../axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useEffect, useState } from 'react'
import './Row.css'


function Row({title,fetchUrl,isLargeRow = false}) {

const [movies, setMovies] = useState([])

useEffect(()=>{

    async function fetchData(){
        const requsest = await axios.get(fetchUrl);

        setMovies( requsest.data.results)
        return requsest
    }
 
    fetchData();
}, [fetchUrl])



const baseUrl = "https://www.themoviedb.org/t/p/original/" 



  return (


<div className='row'>

<h2>{title}</h2>

<Swiper
      spaceBetween={10}
  
      onSlideChange={() => console.log('slide change')}


      breakpoints={{
        480: {
          slidesPerView: `${isLargeRow ? 4 : 2}`,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: `${isLargeRow ? 5 : 3}`,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView:`${isLargeRow ? 7 : 5}`,
          spaceBetween: 10,
        },
      }}
      
>


{movies.map(movie =>(
 <SwiperSlide><img className={`row_poster ${isLargeRow && 'row-posterLarge'}`}  key={movies.id}src={`${baseUrl}${isLargeRow ? movie.poster_path : movie?.backdrop_path }`} alt={movie.name}></img></SwiperSlide>

))}
     
     
      
    </Swiper>






    </div>
  )
}

export default Row