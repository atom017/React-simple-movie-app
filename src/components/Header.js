import React from 'react'
import Loader from './Loader'
import {FaSearch} from 'react-icons/fa'
import { useGlobalContext } from '../context'

const Header = () => {
    const {searchTerm,setSearchTerm,handleOnSubmit,handleOnChange,selectOnChange} = useGlobalContext()
    return (
        <header>
            <form action="" onSubmit={handleOnSubmit}>
                <input 
                type="text" 
                className='search' placeholder='search...' 
                value = {searchTerm}
                onChange={handleOnChange}
                />
                <span type="submit" onClick={handleOnSubmit}><FaSearch className='fa-search'/></span>
                
            </form>
            <select name="genre" id="genre"
                onChange={selectOnChange}
                 className='select'
                 defaultValue={'DEFAULT'} >
                    <option value="DEFAULT" disabled hidden>Choose genres</option>
                    <option value="action">Action</option>
                    <option value="thriller">Thriller</option>
                    <option value="drama">Drama</option>
                    <option value="science fiction">Science Fiction</option>
                    <option value="comedy">Comedy</option>
                    <option value="history">History</option>
                    <option value="horror">Horror</option>
                    <option value="documentary">Documentary</option>
                    <option value="animation">Animation</option>
                </select>
      </header>
    )
}

export default Header
