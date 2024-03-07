import React,{ useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link, useNavigate,} from 'react-router-dom'
import { getTemperaments, postDogs } from "../../redux/actions";
import styled from "./DogsCreate.module.css"

 function DogsCreate(){
const dispatch = useDispatch()
const navigate = useNavigate()
 
const temperaments = useSelector((state)=> state.temperaments)



const [input,setInput]= useState({
      
    image: "",
    name:"",
      height:{
      imperial: "",
      metric: "" 
      },
      weight:{
  imperial: "",
  metric:""}
  ,
    lifeSpan:"",
  temperamentId: []
  
  
})


let handleChange = (e)=>{
    setInput({
        ...input,
        [e.target.name] : e.target.value
    })
  }


  const handleImperial= (e)=>{
    setInput({
        ...input,
        [e.target.name] : {
            
           imperial:  e.target.value,
           metric: e.target.value

        }
    })
  }



  const handleMetric= (e)=>{
    setInput({
        ...input,
        [e.target.name] : {
            
           imperial:  e.target.value,
           metric: e.target.value

        }
    })
  }
    
    
   

const handleSelect = (e) =>{
    setInput({
        ...input,
        temperamentId: [...input.temperamentId, Number(e.target.value)]
    })
}



console.log("antes submit", input)
const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(postDogs(input))
    


    navigate('/home')
}

useEffect(()=>{
dispatch(getTemperaments())
}, [])


return(
    <center>
        <Link to='/home'>
    <button className={styled.button}>HOME</button>
</Link>
<div className={styled.card}>

<h1 className={styled.letraColor}>Create Dog</h1>
<form onSubmit={handleSubmit}>
    <div>
    <div>
        <label className={styled.letras}>Image:</label>
        <input
        type="text"
        value={input.image}
        name="image"
        onChange={handleChange}
        key={input.id}
        required
        placeholder="image... "

        />
        </div>
        <div>
        <label className={styled.letras}>Name:</label>
        <input
        type="text"
        value={input.name}
        name="name"
        onChange={handleChange}
        key={input.id}
        required
        placeholder="name... "

        />
        </div>
        <div>
            <label className={styled.letras}>Height Imperial:</label>
            <input
            type="text"
            value={input.height.imperialHeight}
            name="height"
            onChange={handleImperial}
            placeholder="Ejm: 10 - 20 "

            required

            />
        </div>
        <div>
            <label className={styled.letras}>Height Metric:</label>
            <input
            type="text"
            value={input.height.metric}
            name="height"
            onChange={handleImperial}
key={input.id}
placeholder="Ejm: 15 - 20 "

required

            />
            </div>
        <div>
            <label className={styled.letras}>Weight Imperial:</label>
            <input
            type="text"
            value={input.weight.imperial}
            name="weight"
            onChange={handleMetric}
key={input.id}
placeholder="Ejm: 5 - 10 "

required

            />
        </div>
        <div>
            <label className={styled.letras}>Weight Metric:</label>
            <input
            type="text"
            value={input.weight.imperialMetric}
            name="weight"
            onChange={handleMetric}
            placeholder="Ejm: 10 - 20 "

key={input.id}
required

            />
        </div>
        <div>
            <label className={styled.letras}>Years Of Live:</label>
            <input
            type="text"
            value={input.lifeSpan}
            name="lifeSpan"
            onChange={handleChange}
key={input.id}
placeholder="Ejm: 10 - 20 years"

required

            />
        </div>
        <select className={styled.optionCss} onChange={handleSelect} required>
            {temperaments.map((tem) => (
            <option key={tem.name} value={tem.id}>{tem.name}</option>
            ))}
        </select>
    
    </div>

   <h1 className={styled.letras}> <ul><li>{input.temperamentId.map(el => el + ' ,')}</li></ul></h1>


    <button className={styled.buttonA}  type="submit">Crear Perro</button>
</form>
</div> 
</center>
)
}

export default DogsCreate




/*
 <div>
            <label>Height Imperial:</label>
            <input
            type="text"
            value={input.height.imperialHeight}
            name="height"
            onChange={handleChange}
            

            />
        </div>
        <div>
            <label>Height Metric:</label>
            <input
            type="text"
            value={input.height.metric}
            name="height"
            onChange={handleChange}
key={input.id}
            />
        </div>
        <div>
            <label>Weight Imperial:</label>
            <input
            type="text"
            value={input.weight.imperial}
            name="imperialWeight"
            onChange={handleChange}
key={input.id}
            />
        </div>
        <div>
            <label>Weight Metric:</label>
            <input
            type="text"
            value={input.weight.imperialMetric}
            name="metricWeight"
            onChange={handleChange}
key={input.id}
            />
        </div>
        <div>
            <label>Years Of Live:</label>
            <input
            type="text"
            value={input.lifeSpan}
            name="lifeSpan"
            onChange={handleChange}
key={input.id}
            />
        </div>
        <select onChange={handleSelect}>
            {temperaments.map((tem) => (
            <option key={tem.name} value={tem.name}>{tem.name}</option>
            ))}
        </select>
    </div>
    <ul><li>{input.temperamentId.map(el => el + ' ,')}</li></ul>


*/