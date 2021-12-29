import React,{useState,useEffect} from 'react';
import { FaStar } from 'react-icons/fa';
import MovieModal from './MovieModal';


const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const Movie = (props) => {
    const {id,title,poster_path,overview,vote_average,name} = props
    const [modalShow,setModalShow] = useState(false);
    const handleClick = () =>{
        
        setModalShow(true)
    }

    useEffect(() =>{

    },[modalShow]);
    return (
        <section className='movie'>
            <img src={IMG_URL+poster_path} alt={title} />
            
            <div className="movie-info">
            {title === undefined?<h4>{name}</h4>: <h4>{title}</h4>}
                <div className="movie-detail">
                <span><FaStar style={{color: "#ebcc34"}}/>{vote_average}</span>
                
                <button className="btn" onClick={handleClick}>Detail</button>
                </div>
   
            </div>
           {modalShow && <MovieModal {...props} modalShow={modalShow} handleModal={setModalShow}/>}
        </section>
    )
}

export default Movie
