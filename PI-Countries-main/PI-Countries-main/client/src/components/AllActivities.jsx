import React from 'react';
import { getActivities } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import NavBar from './NavBar';
import styles from './AllActivities.module.css'

function AllActivities(props) {

    const dispatch = useDispatch()
    const allActivities = useSelector(state => state.allActivities)

    useEffect(()=> {
        dispatch(getActivities() 
        )},[dispatch, allActivities])
    return (
        <div>
             <NavBar/>
             <div className ={styles.grid}>
            {allActivities.length ? allActivities.map(act => 
            <div key={act.id} >
               
                <ul>
                    <fieldset className = {styles.card}>
                <legend > <h3>Activities</h3></legend>   
                  
                     <li> name: {act.name}</li>
                     <li> season: {act.season}</li>
                      <li> dificulty: {act.dificulty}</li>
                      <li> duration: {act.duration}</li>
                   <li> countries: {act.countries.map(el => 
                       el.name + ', '  )}</li>  
                
                 </fieldset>
              </ul>
            </div>

            ):console.log(allActivities)}
            </div>
        </div>
    );
}

export default AllActivities;