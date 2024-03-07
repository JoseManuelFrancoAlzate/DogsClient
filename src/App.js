import './App.css';
import {Routes,Route,Navigate, useNavigate } from "react-router-dom"
import Home from './components/Home/Home';
import Landing from './components/Landing/Landing'
import FormDog from './components/formDog/formDog';
import { useState } from 'react';
import SearchDogs from './components/SearchDogs/SearchDogs';
import  DogsCreation from './components/DogsCreate/DogsCreate';
import axios from 'axios';

axios.defaults.baseURL = "https://dogsback-rl6u.onrender.com"

function App() {
  const navigate = useNavigate()

  const [access, setAccess] = useState(false)
  const username = 'dogs123@gmail.com'
const password = 'dogs123'
const login =(userData) =>{
  if(userData.username === username && userData.password === password){
    setAccess(true)
    navigate("/home")
  }
}
  return (
    <div className="App" style={{ padding: '70px' }} >
<Routes>
<Route path="/" element={<Landing login={login}/>}/>
<Route path="/detail/:id" element={<FormDog/>}/>
<Route path='/search' element={<SearchDogs/>}/>
 <Route path='/home' element={<Home/>} />
<Route path='/form' element={<DogsCreation/>}/>
</Routes>
    </div> 
  );
}

export default App;
