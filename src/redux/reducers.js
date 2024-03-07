import { GET_DOGS, SEARCH_DOGS, ORDER, ORDER_WEIGHT, FILTER_TEMPERAMENTS, GET_TEMPERAMENTS, FILTER_CREATED, POST_DOGS } from "./actions";

const initialState={
    dogs:  [],
    allDogs: [],
    temperaments:[],
    allTemperaments:[]
}


const rootReducer=(state=initialState,action)=>{
switch(action.type){

    case GET_DOGS:
        console.log("estamos en", state.dogs )
        
        return {...state, 

            dogs: action.payload,
            allDogs: action.payload,
            allTemperaments: action.payload


    };
    case SEARCH_DOGS:
        return{
            ...state,
            dogs: action.payload   
        }
        
        case ORDER: 

        const OrderAbc = action.payload === 'Ascendente' 
        ?   state.dogs.sort(function (a, b) {
            if (a.name > b.name) {return 1;}
            if (b.name > a.name) {return -1}
            return 0;
        }) :
        state.dogs.sort(function (a, b) {
            if (a.name > b.name) {return -1;}
            if (b.name > a.name) {return 1;}
            return 0;
        })
        
        return{
            ...state,
         dogs:  OrderAbc
        }

        case ORDER_WEIGHT:


    const statusFilter = action.payload === 'Ascendente' ? state.dogs.sort((a,b)=>Number(a.weight.imperial[5]) - Number(b.weight.imperial[5]) ) : state.dogs.sort((a,b)=>Number(b.weight.imperial[5])- Number(a.weight.imperial[5]) )

            return {...state,
            
              dogs: statusFilter       

     }   

case GET_TEMPERAMENTS:
    return {
        ...state,
        temperaments: action.payload
    }


    case FILTER_TEMPERAMENTS:
        const allDogs = state.allDogs;
        const temperamentFiltered =
          action.payload === "All"
            ? allDogs
            : allDogs.filter(
                (el) =>
                  el.temperament &&
                  el.temperament.split(", ").find((e) => e === action.payload)
              )

        //console.log("filtro temperamentos",allDogs)
        return {
          ...state,
          dogs: temperamentFiltered,
        };


        case FILTER_CREATED:

        const filterCreated = action.payload === 'created' ? state.allDogs.filter(d => d.createdDb) : state.allDogs.filter(d => !d.createdDb)

        return {
...state,
dogs:  action.payload === 'All' ? state.allDogs : filterCreated
        }

        case POST_DOGS:
console.log(action.payload)
        return{
            ...state,
            dogs: [...state.dogs, action.payload] 
        } 
      

        
    default:
        return{...state};
}
}

export default rootReducer 

//agarrar el primer elemento del string y pasarlo a numero