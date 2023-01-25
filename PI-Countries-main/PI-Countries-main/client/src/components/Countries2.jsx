import React from "react";
import { useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import { getCountries } from '../redux/actions'
import Country from "./Country"; 
import Page from "./Page";
import styles from './Country.module.css'

const Countries2 = () => {

const dispatch = useDispatch()
const countries = useSelector (state =>state.countries)
const error = useSelector(state=>state.error)
   const [currentPage, setCurrentPage] = useState(1)
   const [countriePerPage, setCountriesPerPage] = useState(9)
   const indexLast = currentPage * countriePerPage
   const indexFirst = indexLast - countriePerPage
   const currentCountries = countries.slice(indexFirst,indexLast )

   const page = (pageNum) => {
      setCurrentPage(pageNum)
      
      
     }
     
 

useEffect(()=> {
 dispatch(getCountries()
 
 )},[dispatch])

 useEffect(()=> {
   if(countries.length < 8){
      page(1)
   }
   
},[countries])



return(
   <>
 
   <div className={styles.grid}>
         
    {currentCountries.length ? currentCountries.map(countries => 
       <div >  
          <Country 
          key={countries.id} 
           name={countries.name} 
           image={countries.image} 
           continent={countries.continent} 
           capital={countries.capital} 
          population={countries.population} 
          id={countries.id}
          />
       </div>
        ) 
        : <h2>{error.message}</h2>} 
   </div>
        <Page
          countriePerPage= {countriePerPage}
          countries= {countries.length}
          page= {page}
          />
 </>
 
)
}



export default Countries2