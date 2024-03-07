import axios from "axios"


export const GET_DOGS = "GET_DOGS"
export const SEARCH_DOGS = 'SEARCH_DOGS'
export const ORDER = "ORDER"
export const ORDER_WEIGHT = "ORDER_WEIGHT"
export const FILTER_TEMPERAMENTS= "FILTER_TEMPERAMENTS"
export const FILTER_CREATED= "FILTER_CREATED"
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS"
export const POST_DOGS = "POST_DOGS"

export const getDogs = ()=>{
    return async function(dispatch){
        try{
            const dogsData = await axios.get(
                "/dogs"
                )
            const dogs = dogsData.data
            dispatch({type:GET_DOGS, payload: dogs})
        }catch(error){
            alert('DOSG NOT CREATE')
        }
    
    }
    }


    export const searchDogs =  (name)=>{
        return async function (dispatch) {
          try{
            var api = await axios.get(`/dogs?name=${name}`)
            return dispatch({
                type: SEARCH_DOGS,
                payload: api.data
            } )   
          } catch(error){
            console.log(error)
          }
        }
    }

    export const orderCards = (abc)=>{
      return {type: ORDER,
      payload: abc
      }
      
      }

      export const orderCards_weight = (weight)=>{
        return {type: ORDER_WEIGHT,
        payload: weight
        }
        }
    
        export const filterTemperaments = (temperaments)=>{
          return{
              type: FILTER_TEMPERAMENTS,
              payload: temperaments
          }
          }

          export function getTemperaments() {
            return async function (dispatch) {
                try {
                    const res = await axios.get(`/temperaments`);
                    return dispatch({
                        type: GET_TEMPERAMENTS,
                        payload: res.data
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        }

        export const filterCreated = (created)=>{
            return {
                type: FILTER_CREATED,
            payload: created
            }
            }


            export function postDogs(newDog){
                return async function(dispatch){
                 try {
                    const response= await axios.post('/dogs',newDog).data

                    console.log(Object.keys(response))

                  alert('DOGS CREATED')

                    return dispatch({
                    type: POST_DOGS,
                    payload: response
                    
                    })

                 } catch (error) {
                    console.log('NO SE CREO EL PERRO')
                 }
                 
                }
            }

 
        
    export default getDogs
