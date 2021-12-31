import React,{useState,useEffect,useContext} from 'react'
import { useCallback } from 'react';
import { Genres } from './Data/Genres';


const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
const query_all = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`;
const query_search = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=`;
const query_genre = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=`;

const AppContext = React.createContext();
const AppProvider = ({children}) => {
    const [movies,setMovies] = useState([]);
    const [loading,setLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState('');

    const getMovies = async (API) =>{
        try {
          const response = await fetch(API);
          const movies_arr = await response.json();
          setLoading(false);
          setMovies(movies_arr.results);
         
        } catch (error) {
          setLoading(false);
          console.log(error)
        }
    }

    useEffect(()=>{
        getMovies(query_all);
    },[]);

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        if(searchTerm){
          setLoading(true);
          getMovies(query_search+searchTerm);
          setSearchTerm('');
        }
        else{
          getMovies(query_all);
        }   
    }
    
      const handleOnChange = (e) =>{
        setSearchTerm(e.target.value);
      }
    
      const selectOnChange = async (e) =>{
        e.preventDefault();
        
        const g_id = Genres[e.target.value];
        if(g_id){
          setLoading(true);
          getMovies(query_genre+g_id);
        }
      
      }

    return (
        <AppContext.Provider
        value={{
            loading,
            movies,
            searchTerm,
            setSearchTerm,
            handleOnChange,
            handleOnSubmit,
            selectOnChange
        }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
  }
  
export { AppContext, AppProvider }
  
