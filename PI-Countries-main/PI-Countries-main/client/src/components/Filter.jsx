import React, { useState } from "react";
import styles from './Filter.module.css'
import{ filterByContinent, filterByAlphabet, filterByPopulation, searchCountries } from '../redux/actions'
import { useDispatch } from "react-redux";


const Filter= (props) => { 
    
    const dispatch = useDispatch() 
    const [search, setSearch] = useState('')
   

    const onSubmit = (event) => {
    event.preventDefault();
     dispatch(searchCountries(search))
    }
    const onInputChange = (event) => {
      event.preventDefault()
     setSearch(event.target.value)
    }

     
    const handleContinentFilter = (event) => {
     dispatch(filterByContinent(event.target.value))
     }
   
     
      const handleNameFilter = (event) => {
      event.preventDefault();
      dispatch(filterByAlphabet(event.target.value))
   
     }

     const handlePopulationSort = (event) => {
        event.preventDefault();
        dispatch(filterByPopulation(event.target.value))
     
     }

 
    return (
        <div className={styles.sidebar}>
          <ul className={styles.ul}>
            <h1 className={styles.filter}>Filter by: </h1>
            <label className={styles.label} htmlFor="alphabetical order">alphabetical order:
              <li>
                <select onChange={event => handleNameFilter(event)} className={styles.select} name="name" >
                  <option value="Asc" key='asc'>a-z</option>
                  <option value="Desc" key='desc'>z-a</option>
                </select>
              </li>
            </label>
            <label className={styles.label} htmlFor="population">population:
              <li>
                <select onChange={ event => handlePopulationSort(event)} className={styles.select} name="population" >
                  <option value="highest" key='highest'>highest</option>
                  <option value="lowest" key='lowest'>lowest</option>
                </select>
              </li> 
            </label>
            <label className={styles.label} htmlFor="continent">continent:
              <li>
                <select onChange={ event => handleContinentFilter(event)} className={styles.select} name="continent" >
                  <option value="All" key='All'>All</option>
                  <option value="Americas" key='Americas'>Americas</option>
                  <option value="Oceania" key='Oceania'>Oceania</option>
                  <option value="Europe" key='Europe'>Europe</option>
                  <option value="Asia" key='Asia'>Asia</option>
                  <option value="Africa" key='Africa'>Africa</option>
                  <option value="Antarctic" key='Antartic'>Antartic</option>
                </select>
               </li> 
            </label>
               <li>
                <form onSubmit={onSubmit} className={styles.form} >
                  <input type="text" className={styles.select} placeholder='country name' onChange={onInputChange} value={search}  />
                  <input type="submit" value="search" className={styles.search}/></form>
              </li>
            </ul>
        </div>
    );
}

export default Filter;