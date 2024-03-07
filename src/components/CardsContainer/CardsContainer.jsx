import Card from "../Card/Card";
import {getDogs, orderCards, orderCards_weight, getTemperaments,filterTemperaments,filterCreated}from "../../redux/actions";
import Paginado from "../Paginado/Paginado";
import { useEffect, useState} from "react";
import { useSelector, useDispatch  } from "react-redux";
import styled from './CardsContainer.module.css'
import SearchDogs from "../SearchDogs/SearchDogs";
function CardsContainer() {

    const dogs = useSelector(state=>state.dogs)
    const temperaments = useSelector(state => state.temperaments)

    const dispatch = useDispatch();

    const [order, setOrder] = useState('')

    const [page, setPage] = useState(1)
const [dogsPage,setDogsPage] = useState(8)
const indexOfLastDogs = page * dogsPage
const indexOfFirstDogs = indexOfLastDogs - dogsPage 
const currentDogs= dogs.slice(indexOfFirstDogs,indexOfLastDogs)

const paginado = (pageNumber)=>{
  setPage(pageNumber)
}

    useEffect(()=>{
  dispatch(getDogs())
  dispatch(filterTemperaments())
    },[dispatch])

    useEffect(()=>{
      dispatch(getTemperaments())
        },[dispatch])
    
    
   

       const handlerOrder = (event)=>{
        event.preventDefault();
        dispatch(orderCards(event.target.value))
        setOrder(`${event.target.value}`)
        }

        const handlerOrder_weight = (event)=>{
          event.preventDefault();
          dispatch(orderCards_weight(event.target.value))
          setOrder(`${event.target.value}`)}  

          const handlerFilterTemperaments = (e)=>{
            e.preventDefault();
                    dispatch(filterTemperaments(e.target.value))
                    setOrder(`${e.target.value}`)
            
          }

          const handlerFilterCreated = (event)=>{
            event.preventDefault();
            dispatch(filterCreated(event.target.value))
            setOrder(`${event.target.value}`)  
            }
        
  return (<div>
    <SearchDogs/>

    <Paginado 
dogsPage={dogsPage}
dogs={dogs.length}
paginado={paginado}
/>
    
    <select onChange={handlerOrder} className={styled.selectCss}>
      <option disabled='disabled'> Alphabetically</option>
<option value="Ascendente">
Upward
</option>
<option  value="Descendente">
Falling
</option>
      </select>
      <select  onChange={handlerOrder_weight} className={styled.selectCss}>
      <option disabled='disabled'> Weight</option>
<option value="Ascendente" key='Ascendente'>
Upward
</option>
<option  value="Descendente" key='Descendente'>
Falling
</option>
      </select>
      <select  className={styled.selectCss} onChange={handlerFilterTemperaments} >
      <option  value='All'>All temperaments</option>
                        {temperaments.map(e => (
                            <option value={e.name} key={e.id}>{e.name}</option>
                        ))}
      </select>
      <select className={styled.selectCss} onChange={(e)=>handlerFilterCreated(e)}>
      <option disabled='disabled'>ORG</option>
      <option value='allDogs'>
  All Dogs
</option>
<option value="created" key='created'>
  Creados
</option>
<option  value="api" key='noCreate'>
  Existentes
</option>
      </select>
    <div className={styled.container}>

{currentDogs  &&
  currentDogs.map(dogs=>{
    return <Card id={dogs.id}
    image={`https://cdn2.thedogapi.com/images/${dogs.reference_img}.jpg`}
    imagen={dogs.image}
    name= {dogs.name}
    temperament={dogs.temperament}
    weight={dogs.weight.imperial}
    key={dogs.id}
   />
  })
}
    </div> 
    </div>
  );
}

export default CardsContainer;