import { oneDogs } from "../funciones/funciones";
import React,{useEffect,useState} from 'react'
import {useParams} from "react-router-dom"
import styled from './formDogs.module.css'
import { Link } from 'react-router-dom'

const FormDog =()=>{
    const [dogs, setDogs] = useState(null)

    const params = useParams()

    useEffect(()=>{
        oneDogs(params.id,setDogs)
    },[])


 
    let url= `https://cdn2.thedogapi.com/images/`
    return(
        <div>
        
                   <center>
<Link  to='/home' >
    <button className={styled.button}>
    Home
    </button></Link>
    </center>
        <div  className={styled.card}>
     
        {dogs !== null ? (   <center>
             <div >
                <div>
                    
                <h1 className={styled.letraColor}>ID:</h1>
         <h2 className={styled.letras}> {params.id}</h2> 
         <h1 className={styled.letraColor}>Name:</h1>
  
         <h3 className={styled.letras}> {dogs.name}</h3>
        
        { dogs.reference_image_id !== undefined ? <img src={`https://cdn2.thedogapi.com/images/${dogs.reference_image_id}.jpg`} alt="" width="500px" height="400px"/> 
        : <img src={dogs.image} alt="" width="500px" height="400px"/>}
         </div>
         <div>
         <h1 className={styled.letraColor}>HEIGHT:</h1>

         <h3 className={styled.letraDos}>Height imperial:</h3>

    <h2 className={styled.letras} > {dogs.height.imperial}</h2>

    <h3 className={styled.letraDos}>Height metric:</h3>


    <h2 className={styled.letras} > {dogs.height.metric}</h2>

    <h1 className={styled.letraColor}>WEIGHT:</h1>

<h3 className={styled.letraDos}>Weight imperial:</h3>
   <h2 className={styled.letras}>{dogs.weight.imperial}</h2>

   <h3 className={styled.letraDos}>Weight metric:</h3>

   <h2 className={styled.letras}>{dogs.weight.metric}</h2>

   <h1 className={styled.letraColor}>TEMPERAMENT:</h1>
   { dogs.temperament !== undefined ? <h2 className={styled.letras}>{dogs.temperament}</h2> :
   <h2 className={styled.letras}>{dogs.Temperaments[0].name + ',' +  dogs.Temperaments[1].name + ',' +  dogs.Temperaments[2].name }</h2>  }

   <h1 className={styled.letraColor}>YEARS SPAN:</h1> 

 {  dogs.life_span !== undefined ? <h2 className={styled.letras}>{dogs.life_span}</h2> : <h2 className={styled.letras}>{dogs.lifeSpan}</h2> }


</div>





             </div>
             </center>) : <img src='https://i.pinimg.com/originals/8a/0e/c2/8a0ec2aca879a269d3fe721b6a0454ff.gif' alt="" width="400px" height="200px"/>}
        </div > 
         
        </div>
    )
}



export default FormDog



//traer la api y agregar las imagenes a los perros correspondientes por medio de el ID