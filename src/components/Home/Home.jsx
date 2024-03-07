import CardsContainer from "../CardsContainer/CardsContainer";
import styled from './Home.module.css'
import { Link } from "react-router-dom";

const Home = ()=>{

 

    return (
      
<>
<center>
<div  className={styled.B}>
<Link  to={`/form`} >
<h2 className={styled.container} >Create Dog</h2>
</Link>
</div>
</center>
<CardsContainer/>
</>
      );
}

export default Home


/*
<Card
name= {"Jose Manuel Franco Alzate"}
email={"Jose123@gmail.com"}
phone={322922773}
/>
*/