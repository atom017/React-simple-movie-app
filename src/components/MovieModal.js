import React from 'react'
import { Genres } from '../Data/Genres';

const API_KEY = process.env.REACT_APP_API_KEY;
const youtubeURL = 'https://www.youtube.com/watch?v=';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const watch = 'https://api.themoviedb.org/3/movie/{movie_id}/watch/providers?api_key=0dbb1632da921e4bc6c1e4b3d1287a6b'
const MovieModal = ({modalShow,handleModal,title,name,overview,id,poster_path,genre_ids}) => {
  
    const showHide = modalShow ? 'show-modal' : 'hide-modal';

    const onWatch = async () =>{
       
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&append_to_response=videos`);
            const movies_arr = await response.json();
            const videos = movies_arr.videos.results;
            let videoID = '';
            let site = '';
           // console.log(movies_arr);
            if(videos.length !== 0){
                for(let key in videos){
                    if(videos[key].name.includes('Trailer')){
                     videoID = videos[key].key;
                     site = videos[key].site;
                    }
                    
                    //console.log(videos[key]);
                }
                if(videoID && site ==='YouTube'){
                 window.open(`${youtubeURL}${videoID}`);
                }
            }
           
          } catch (error) {
           
            console.log(error)
          }
    }


    return (
        <section className={`modal-container ${showHide}`}>
            
            <div className='movie-modal'>
                
                <button className="modal-btn" onClick={() => handleModal(false)}>X</button>
               
                <div className="modal-info">
                
                   <div className="modal-img-container">
                    <img src={IMG_URL+poster_path} alt={title} />
                   </div>
                    <div className="overview-info">
                    {title === undefined?<h3>{name}</h3>: <h3>{title}</h3>}
                        <p className='modal-overview-p'>genres: {genre_ids.map((gid,index) =>{
                            let key = Object.keys(Genres).find(k=>Genres[k]===gid);
                            if(key){return <span key={index}>{key}</span>}
                            
                        })}</p>
                    <div className="overview-container">
                        
                        <h4>Overview</h4>
                        <p>{overview}</p>
                        <button className="btn" onClick={onWatch}>watch trailer</button>
                   </div>
                    </div>
                    
                </div> 
             </div>
       
        </section>
        
    )
}

export default MovieModal
