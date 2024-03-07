import React from "react";
import { useState } from "react";
import {useDispatch} from 'react-redux'
import { searchDogs } from "../../redux/actions";
import styled from './SearchDogs.module.css'


 const SearchDogs = ()=>{
    const dispatch = useDispatch()
    const [name, setName] = useState(null)
 
    
function handlerInputDogs(event){
    event.preventDefault()
    setName(event.target.value)
    console.log(name)
}

function handleButton(event){
    event.preventDefault()
    dispatch(searchDogs(name))
}

return(
    <div>
    <input
    className={styled.inputCss}
    type='text'
    placeholder="Search Dogs..."
    onChange={handlerInputDogs}/> 
    
    <button className={styled.searchB} onClick={handleButton} type='submit'>
    Search
    </button>
   
        </div> 
)

}


export default SearchDogs