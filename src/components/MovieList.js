import React from 'react'
import { useGlobalContext } from '../context'
import Movie from './Movie';
import Loader from './Loader';
const MovieList = () => {
    const {movies,loading} = useGlobalContext();
    if(loading){
        return <Loader/>
    }
    if(movies.length < 1){
        return <h3 className='no-movie no-movie-title'>No Movies Match Your Search Criteria !</h3>
    }
    return (
        <div className='movie-container'>
            {movies.map((movie) => <Movie key={movie.id} {...movie}/>)}
        </div>
    )
}

export default MovieList
