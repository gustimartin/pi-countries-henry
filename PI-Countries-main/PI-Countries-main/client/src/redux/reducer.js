
import {  ERROR, GET_COUNTRIES,SEARCH_COUNTRIES, POST_ACTIVITY, GET_COUNTRIES_DETAIL, FILTER_BY_POPULATION, FILTER_BY_CONTINENT, FILTER_BY_ALPHABET, GET_ACTIVITIES } from "./actions";

const initialState = {
   countries: [],
   error:{},
   activities:{},
   detail:{},
   allCountries: [],
   allActivities: []
}

const rootReducer = (state = initialState, action) => { 
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries:action.payload,
                population:action.payload,
            }
            case SEARCH_COUNTRIES:
                return {
                    ...state,
                    countries: action.payload,
                   
                }
               
                  
        case ERROR:
                return {
                    ...state,
                error: action.payload,
                }
         case POST_ACTIVITY:
                return {
                    ...state,
                 activities: action.payload,
                }
        case GET_COUNTRIES_DETAIL:
            return {
                ...state,
                detail: action.payload,
            }
        case FILTER_BY_CONTINENT:
                const allCountries =state.allCountries
                const filtered = action.payload === 'All' ? allCountries : allCountries.filter(
                    element => element.continent === action.payload )
                return{
                ...state,
                countries:filtered
 
                }
        case FILTER_BY_POPULATION:
            let sortPopulation = [...state.countries] 
            sortPopulation.sort(function (a, b) {
                if (Number(a.population) >Number( b.population)) {
                    return action.payload === 'lowest' ? 1 : -1
                }
                if ( Number( b.population) > Number( a.population)) {
                    return action.payload === 'lowest' ? -1 : 1
                }
                return 0;
            })
               
               return {
                  ...state,
                  countries: sortPopulation,
                        } 
                    
        case FILTER_BY_ALPHABET:
            let alphabet = [...state.countries]
            alphabet = alphabet.sort((a, b) => {
                if (a.name > b.name){
                    return action.payload === 'Asc' ? 1 : -1
                }
                if (b.name > a.name) {
                    return action.payload === 'Asc' ? -1 : 1
                }
                return 0;
            })
            
               return {
                  ...state,
                  countries: alphabet,
                        }
                        case GET_ACTIVITIES:
                            return {
                                ...state,
                                allActivities: action.payload
                            }
            default:
                 return { ...state   }
               
         
    }
}

export default rootReducer;