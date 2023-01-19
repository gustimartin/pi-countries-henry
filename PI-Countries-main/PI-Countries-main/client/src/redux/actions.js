import axios from 'axios'
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const ERROR = 'ERROR'
export const POST_ACTIVITY = 'POST_ACTIVITY'
export const GET_COUNTRIES_DETAIL = 'GET_COUNTRIES_DETAIL'
export const FILTER_BY_POPULATION = 'FILTER_BY_POPULATION'
export const FILTER_BY_ALPHABET = 'FILTER_BY_ALPHABET'
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'

 export const getCountries = () => {
 return async function (dispatch){
    try {
    const resp = await axios.get('http://localhost:3001/api/countries')
    const countries = resp.data
    dispatch({
        type:GET_COUNTRIES,
        payload:countries 
    })}
    catch(error) {
     dispatch({
        type:ERROR,
        payload: error
     })
    }
 }
}

export const getActivities = () => {
   return async function(dispatch) {
      try{
         const resp = await axios.get('http://localhost:3001/api/activities')
         const allActivities = resp.data    
         dispatch({
            type:GET_ACTIVITIES,
            payload: allActivities

         })

      }catch(error) {
         dispatch({
            type:ERROR,
            payload: error
         })
      }
   }
}

export const searchCountries = (search) => {
   return async function (dispatch){
      try {
      const resp = await axios.get('http://localhost:3001/api/countries?name=' + search)
      const countries = resp.data
      dispatch({
          type:GET_COUNTRIES,
          payload:countries 
      })}
      catch(error) {
       dispatch({
          type:ERROR,
          payload: error
       })
      }
   }
  }

 
export const postActivity = (payload) => {
   return async function (dispatch){
      try {
      const resp = await axios.post('http://localhost:3001/api/activities', payload)
      const message = resp.data
      dispatch({
          type:POST_ACTIVITY,
          payload:message 
      })
   }
      catch(error) {
       dispatch({
          type:ERROR,
          payload: error
       })
      }
   }
  }

  export const getCountriesDetail = (id) => {
   return async function (dispatch){
      try {
      const resp = await axios.get(`http://localhost:3001/api/countries/${id}`)
      const detail = resp.data
      dispatch({
          type:GET_COUNTRIES_DETAIL,
          payload:detail
      })}
      catch(error) {
       dispatch({
          type:ERROR,
          payload: error
       })
      }
   }
  }

  export const filterByContinent = (payload) => {
    try {

      return({
          type:FILTER_BY_CONTINENT,
          payload
      })
    } catch (error) {
      return({
         type:ERROR,
         payload: error 
      })  
    }
  }

  export const filterByAlphabet = (payload) => {
  try {
   return({
      type:FILTER_BY_ALPHABET,
      payload
})
   
  } catch (error) {
   return({
      type:ERROR,
      payload: error
   })  
  }
  }

  export const filterByPopulation = (payload) => {
   try {
      return({
         type:FILTER_BY_POPULATION,
         payload
   })
      
     } catch (error) {
      return({
         type:ERROR,
         payload: error
      })  
     }
  }

