import styled from "./Card.module.css"
import { Link } from 'react-router-dom'



const Card =(props)=>{
    let img = props.image !== undefined ? props.image : props.imagen
    return(
        
<div   className={styled.card}>
<div className={styled.content}>
<Link  to={`/detail/${props.id}`}>
    <center>
<img   className={styled.imgCss}src={img}/> 
</center>
</Link>
</div>
<div className={styled.footer}>
<p  className={styled.LetraCards}>{props.name}</p>
<h6> <p  className={styled.LetraCards}>{props.temperament}</p> </h6> 
<p className={styled.LetraCards}>  {props.weight}</p>
</div>
      

        </div>
    )
}

export default Card