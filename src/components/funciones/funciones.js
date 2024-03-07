import axios from 'axios'

const oneDogs =async (id, state)=>{
    const peticion  = await axios.get(`http://localhost:3001/dogs/${id}`)
state(peticion.data)
}

const allDogs = async (state)=>{
    const peticion  = await axios.get('http://localhost:3001/dogs/')
    state(peticion.data.results)
    
    }

export {oneDogs, allDogs}